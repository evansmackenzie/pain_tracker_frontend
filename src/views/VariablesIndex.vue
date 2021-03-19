<template>
  <div class="variables-index">
    <h1>Variable Graph</h1>
    <p>{{ relativeTodayDate(today) }}</p>
    <div>
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>

    <form>
      <div class="form-group">
        <label>Date Search:</label>
        <input type="text" class="form-control" v-model="date" />
      </div>
      <button v-on:click="searchDate(date)">Search</button>
      <!-- <input type="submit" class="btn btn-primary" value="Submit" /> -->
    </form>

    <div v-for="variable in variables" v-bind:key="variable.id">
      <h2>{{ variable.name }}</h2>
      <button v-on:click="plotVariable(variable)">Add to chart</button>

      <router-link :to="`/variables/${variable.id}`" tag="button"
        >More Info</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { Chart } from "highcharts-vue";

export default {
  props: ["options", "catchLegendEvents"],
  components: {
    highcharts: Chart,
  },
  data: function() {
    return {
      variables: [],
      today: "",
      dateRange: [],
      newDateRange: [],
      date: null,
      chartOptions: {
        title: {
          text: "Variable Stuff",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          categories: [],
          type: "datetime",
        },
        yAxis: {
          title: {
            text: "Entry Rating",
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: true,
          },
        },
        chart: {
          type: "line",
        },
        series: [],
      },
    };
  },
  created: function() {
    axios.get(`/api/variables`).then((response) => {
      console.log(response.data);
      this.variables = response.data;
    });
    this.today = new Date();
    var dd = String(this.today.getDate()).padStart(2, "0");
    var mm = String(this.today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = this.today.getFullYear();
    this.today = mm + "/" + dd + "/" + yyyy;
    console.log(this.today);

    console.log(
      this.relativeTodayDate(new Date(this.relativeDate(this.today)))
    );

    var startDate = new Date(this.relativeDate(this.today));
    for (var i = 2; i < 19; i++) {
      startDate.setDate(i);
      var date = startDate.toDateString();
      this.dateRange.push(this.relativeTodayDate(date));
    }

    // console.log(this.dateRange);
  },
  methods: {
    relativeDate: function(date) {
      return moment(date)
        .subtract(13, "days")
        .calendar();
    },
    relativeTodayDate: function(date) {
      return moment(date).format("M/D/YYYY");
    },
    plotVariable: function(variable) {
      var newSeries = {};
      newSeries.name = variable.name;
      newSeries.data = variable.entries.map((entry) => entry.rating);
      // if (this.chartOptions.series.length < 1) {
      // this.chartOptions.xAxis.categories = variable.entries.map(
      //   (entry) => entry.created_at
      // );
      // }
      var graphView = {};
      this.dateRange.forEach(function(createDate) {
        graphView[createDate] = null;
      });

      variable.entries.forEach(function(entry) {
        if (entry.created_at in graphView) {
          graphView[entry.created_at] = entry.rating;
        }
      });

      console.log(graphView);

      this.chartOptions.xAxis.categories = this.dateRange;

      this.chartOptions.series.push(newSeries);
    },
    searchDate: function(date) {
      var newStartDate = new Date(this.relativeDate(date));

      for (var i = 2; i < 19; i++) {
        newStartDate.setDate(i);
        this.newDateRange.push(newStartDate.toDateString());
      }

      console.log(this.newDateRange);
      this.chartOptions.xAxis.categories = this.newDateRange;
    },
  },
};
</script>
