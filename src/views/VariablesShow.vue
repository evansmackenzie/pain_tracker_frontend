<template>
  <div class="variables-show">
    <!-- breadcrumbs -->
    <section class=" g-bg-gray-light-v5 g-py-40">
      <div class="container text-center">
        <h2 class="h2 g-color-primary g-font-size-40 g-font-weight-600">
          Variable: {{ variable.name }}
        </h2>
      </div>
    </section>
    <br />
    <!-- breadcrumbs -->

    <!-- my code -->
    <div>
      <div class="container">
        <div>
          to edit entry, search by date:
          <input type="text" v-model="filter" list="created_at" />
        </div>
        <datalist id="created_at">
          <option v-for="entry in variable.entries" v-bind:key="entry.id">
            {{ entry.created_at }}
          </option>
        </datalist>
      </div>
      <div v-if="filter != null">
        <div
          v-for="entry in filterBy(variable.entries, filter)"
          v-bind:key="entry.id"
        >
          <form v-on:submit.prevent="entryEdit(entry)">
            <ul>
              <li
                class="text-danger"
                v-for="error in errors"
                v-bind:key="error"
              >
                {{ error }}
              </li>
            </ul>
            <div class="form-group">
              <label>Value:</label>
              <input type="number" size="4" v-model="entry.value" />
            </div>
            <div class="form-group">
              <label>Rating:</label>
              <input type="number" size="4" v-model="entry.rating" />
            </div>
            <input type="submit" class="btn btn-primary" value="Change Entry" />
          </form>
        </div>
      </div>
    </div>
    <br />
    <div>
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>
    <div>
      <div>
        <label>Start Date:</label>
        <input type="text" v-model="startDate" />
        <br />
      </div>
      <div>
        <label>End Date:</label>
        <input type="text" v-model="endDate" />
        <br />
      </div>
    </div>
    <button
      class="btn btn-md u-btn-primary g-mr-10 g-mb-15"
      v-on:click="chartDateRange(startDate, endDate)"
    >
      See Date Range
    </button>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { Chart } from "highcharts-vue";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  components: {
    highcharts: Chart,
  },
  data: function() {
    return {
      variable: {},
      filter: null,
      entry: {},
      errors: [],
      startDate: "",
      endDate: "",
      formattedStartDate: "",
      formattedEndDate: "",
      startIndex: "",
      endIndex: "",
      chartOptions: {
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          categories: [],
        },
        yAxis: {
          title: {
            text: "Entry Value/Rating",
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: true,
            allowPointSelect: true,
          },
        },
        chart: {
          type: "line",
        },
        series: [
          {
            name: "Value",
            data: [],
          },
          {
            name: "Rating",
            data: [],
            color: "#72c02c",
          },
        ],
      },
    };
  },
  created: function() {
    axios.get(`/api/variables/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.variable = response.data;
      console.log(this.variable.entries);

      this.chartOptions.series[0].data = this.variable.entries.map(
        (entry) => entry.value
      );
      this.chartOptions.series[1].data = this.variable.entries.map(
        (entry) => entry.rating
      );
      // this.chartOptions.title.text = this.variable.name;
      this.chartOptions.xAxis.categories = this.variable.entries.map(
        (entry) => entry.created_at
      );
    });
  },
  methods: {
    entryEdit: function(entry) {
      var params = {
        value: entry.value,
        rating: entry.rating,
      };
      axios
        .patch(`/api/entries/${entry.id}`, params)
        .then((response) => {
          console.log(response.data);
          this.renderSeriesData();
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
      console.log(entry);
      this.filter = null;
    },
    renderSeriesData: function() {
      if (this.startIndex == "") {
        this.chartOptions.series[0].data = this.variable.entries.map((entry) =>
          parseInt(entry.value)
        );
        console.log(this.chartOptions.series[0].data);
        this.chartOptions.series[1].data = this.variable.entries.map((entry) =>
          parseInt(entry.rating)
        );
        console.log(this.chartOptions.series[1].data);
      } else {
        this.chartDateRange(this.formattedStartDate, this.formattedEndDate);
      }
    },
    formatDate: function(date) {
      return moment(date).format("MM/DD/YYYY");
    },
    chartDateRange: function(startDate, endDate) {
      this.formattedStartDate = this.formatDate(startDate);
      this.formattedEndDate = this.formatDate(endDate);

      this.variable.entries.forEach(
        function(entry) {
          if (entry.created_at == this.formattedStartDate) {
            this.startIndex = this.variable.entries.indexOf(entry);
          }
          if (entry.created_at == this.formattedEndDate) {
            this.endIndex = this.variable.entries.indexOf(entry);
          }
        }.bind(this)
      );

      var selectedTimeFrameEntries = this.variable.entries.slice(
        this.startIndex,
        this.endIndex + 1
      );
      this.chartOptions.series[0].data = selectedTimeFrameEntries.map((entry) =>
        parseInt(entry.value)
      );
      this.chartOptions.series[1].data = selectedTimeFrameEntries.map((entry) =>
        parseInt(entry.rating)
      );
      // this.chartOptions.title.text = this.variable.name;
      this.chartOptions.xAxis.categories = selectedTimeFrameEntries.map(
        (entry) => entry.created_at
      );
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>
