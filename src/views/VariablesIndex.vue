<template>
  <div class="variables-index">
    <h1>Variable Graphs</h1>
    <div v-for="variable in variables" v-bind:key="variable.id">
      <h2>{{ variable.name }}</h2>
      <div
        v-for="entry in entries[variables.indexOf(variable)]"
        v-bind:key="entry.id"
      >
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
      entries: [],
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
      this.entries = this.variables.map((variable) => variable.entries);
      console.log(this.entries);

      var variableEntries = [];
      var allVariableEntries = [];
      this.variables.map(
        (variable) => (variableEntries = variable.entries),
        console.log(variableEntries),
        allVariableEntries.push(variableEntries)
      );
      console.log(allVariableEntries);
      console.log(this.entries);

      var i = 0;
      var values = [];
      while (i < this.entries.length) {
        this.entries[i].forEach(function(entry) {
          values.push(entry.value);
        });
        i++;
      }
      console.log(values);

      this.chartOptions.series.push({ data: values });

      // this.variables.map((variable) =>
      //   this.chartOptions.series.push({
      //     data: this.entries(where this.entries.entry.variable_id == variable.id)(values),
      //   })
      // );
      this.chartOptions.series.shift();
      // console.log(this.chartOptions.series);
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
