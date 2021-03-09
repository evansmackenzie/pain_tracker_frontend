<template>
  <div class="VariableShow">
    <div>
      <h2>{{ variable.name }}</h2>
      <div v-for="entry in variable.entries" v-bind:key="entry.id">
        <p>value: {{ entry.value }}</p>
        <p>created: {{ relativeDate(entry.created_at) }}</p>
      </div>
    </div>
    <div>
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";

exportingInit(Highcharts);

export default {
  data: function() {
    return {
      variable: {},
      chartOptions: {
        series: [
          {
            data: [1, 2, 3],
          },
        ],
      },
    };
  },
  created: function() {
    axios.get(`/api/variables/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.variable = response.data;
    });
  },
  // mounted: function() {
  //   document.addEventListener("DOMContentLoaded", function() {
  //     const chart = Highcharts.chart("container", {
  //       chart: {
  //         type: "bar",
  //       },
  //       title: {
  //         text: "Fruit Consumption",
  //       },
  //       xAxis: {
  //         categories: ["Apples", "Bananas", "Oranges"],
  //       },
  //       yAxis: {
  //         title: {
  //           text: "Fruit eaten",
  //         },
  //       },
  //       series: [
  //         {
  //           name: "Jane",
  //           data: [1, 0, 4],
  //         },
  //         {
  //           name: "John",
  //           data: [5, 7, 3],
  //         },
  //       ],
  //     });
  //   });
  // },
  methods: {
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
