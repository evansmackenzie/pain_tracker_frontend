<template>
  <div class="VariableShow">
    <!-- <div>
      <h2>{{ variable.name }}</h2>
      <div v-for="entry in variable.entries" v-bind:key="entry.id">
        <p>value: {{ entry.value }}</p>
        <p>created: {{ relativeDate(entry.created_at) }}</p>
      </div>
    </div> -->
    <div>
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
// import Highcharts from "highcharts";
// import HighchartsVue from "highcharts-vue";
import { Chart } from "highcharts-vue";
// Vue.use(HighchartsVue)

export default {
  components: {
    highcharts: Chart,
  },
  data: function() {
    return {
      variable: {},
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
    axios.get(`/api/variables/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.variable = response.data;
      this.chartOptions.series[0].data = this.variable.entries.map(
        (entry) => entry.value
      );
      this.chartOptions.title.text = this.variable.name;
      this.chartOptions.xAxis.categories = this.variable.entries.map(
        (entry) => entry.created_at
      );
    });
  },
  methods: {
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
