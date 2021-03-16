<template>
  <div class="variables-show">
    <div>
      <h2>{{ variable.name }}</h2>
      <div class="container">
        <div>
          search by date:
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
            <h1>Update Entry</h1>
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
              <input type="text" class="form-control" v-model="entry.value" />
            </div>
            <div class="form-group">
              <label>Rating:</label>
              <input type="text" class="form-control" v-model="entry.rating" />
            </div>
            <input type="submit" class="btn btn-primary" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    <div>
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
            data: [1, 2, 3],
          },
          {
            name: "Rating",
            data: [],
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
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
      console.log(entry);
      this.filter = null;
    },
  },
};
</script>
