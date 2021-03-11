<template>
  <div class="VariableIndex">
    <h1>Variable Graphs</h1>
    <div v-for="variable in variables" v-bind:key="variable.id">
      <h2>{{ variable.name }}</h2>
      <div v-for="entry in variable.entries" v-bind:key="entry.id">
        <p>value: {{ entry.value }}</p>
        <p>created: {{ relativeDate(entry.created_at) }}</p>
      </div>
      <div>
        <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
      </div>
      <router-link :to="`variables/${variable.id}`">More Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { Chart } from "highcharts-vue";

export default {
  components: {
    highcharts: Chart,
  },
  data: function() {
    return {
      variables: [],
      chartOptions: {
        title: {
          text: "Monthly Average Temperature",
        },
        subtitle: {
          text: "Source: WorldClimate.com",
        },
        xAxis: {
          categories: [
            "Mon",
            "Tues",
            "Wed",
            "Thurs",
            "Fri",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yAxis: {
          title: {
            text: "Entry Value",
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: false,
          },
        },
        chart: {
          type: "line",
        },
        series: [
          {
            data: [1, 2, 3],
          },
        ],
      },
    };
  },
  created: function() {
    axios.get(`/api/variables`).then((response) => {
      console.log(response.data);
      this.variables = response.data;
      this.variables.map((variable) =>
        this.chartOptions.series.push({ data: variable.entries })
      );
      this.chartOptions.series.shift();
      console.log(this.chartOptions.series);
      // this.chartOptions.series[0].data = this.variables[0].entries.map(
      //   (entry) => entry.value
      // );
    });
  },
  methods: {
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
