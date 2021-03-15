<template>
  <div class="variables-index">
    <h1>Variable Graph</h1>
    <div>
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>

    <div v-for="variable in variables" v-bind:key="variable.id">
      <h2>{{ variable.name }}</h2>
      <button v-on:click="plotVariable(variable)">Add to chart</button>

      <!-- <div v-for="entry in variable.entries" v-bind:key="entry.id">
        <p>value: {{ entry.value }}</p>
        <p>created: {{ relativeDate(entry.created_at) }}</p>
      </div> -->

      <router-link :to="`/variables/${variable.id}`">More Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { Chart } from "highcharts-vue";
// import Highcharts from "highcharts";
// import stockInit from "highcharts/modules/stock";
// import { EventBus } from "./../event-bus.js";
// import { syncCharts } from "./../sync-charts.js";

// stockInit(Highcharts);
// syncCharts(Highcharts);

export default {
  props: ["options", "catchLegendEvents"],
  components: {
    highcharts: Chart,
  },
  data: function() {
    return {
      variables: [],

      chartOptions: {
        title: {
          text: "Variable Stuff",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          categories: [],
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

      // this.variables.forEach((variable) => {
      //   this.chartOptions.series[
      //     this.variables.indexOf(variable)
      //   ].data = variable.entries.map((entry) => entry.value);
      //   this.chartOptions.series[this.variables.indexOf(variable)].name =
      //     variable.name;
      // });
    });
  },
  methods: {
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    plotVariable: function(variable) {
      var newSeries = {};
      newSeries.name = variable.name;
      newSeries.data = variable.entries.map((entry) => entry.rating);
      if (this.chartOptions.series.length < 1) {
        this.chartOptions.xAxis.categories = variable.entries.map(
          (entry) => entry.created_at
        );
      }

      this.chartOptions.series.push(newSeries);
    },
  },
};
</script>
