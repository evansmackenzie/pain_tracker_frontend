<template>
  <div class="variables-index">
    <h1>Variable Graph</h1>
    <p>{{ formatDate(today) }}</p>
    <div>
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>

    <div>
      <label>Date Search:</label>
      <input type="text" class="form-control" v-model="newFinalDate" />
    </div>
    <button v-on:click="generateXAxisCategories(newFinalDate)">Search</button>

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
      newFinalDate: "",
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
    this.findTodaysDate();
  },
  methods: {
    findTodaysDate: function() {
      this.today = new Date();
      var dd = String(this.today.getDate()).padStart(2, "0");
      var mm = String(this.today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = this.today.getFullYear();
      this.today = mm + "/" + dd + "/" + yyyy;
      console.log("Today's date:", this.today);
    },
    generateXAxisCategories: function(finalDate) {
      this.dateRange = [];
      // finds start date based on final date given (2 weeks past)
      var startDate = new Date(this.beginningDate(finalDate));
      console.log("New start date:", startDate);
      // uses start date to genereate new date range
      for (var i = 0; i < 15; i++) {
        var date = moment(startDate).add(i, "days");
        console.log("In loop, date changing", date);
        this.dateRange.push(this.formatDate(date));
      }
      this.chartOptions.xAxis.categories = this.dateRange;
      console.log(this.dateRange);
      // if there are any variables currently plotted on the chart (if theres series data), then call the plotVariable method on each one
      if (this.chartOptions.series != []) {
        var variableNames = [];
        this.chartOptions.series.forEach(function(serie) {
          variableNames.push(serie.name);
        });
        this.chartOptions.series.length = 0;
        console.log(variableNames);
        this.variables.forEach(
          function(variable) {
            if (variableNames.includes(variable.name)) {
              this.plotVariable(variable);
            }
          }.bind(this)
        );
      }
    },
    beginningDate: function(date) {
      return moment(date)
        .subtract(14, "days")
        .calendar();
    },
    formatDate: function(date) {
      return moment(date).format("MM/DD/YYYY");
    },
    plotVariable: function(variable) {
      if (this.chartOptions.xAxis.categories == 0) {
        this.generateXAxisCategories(this.today);
      }

      var xAxisDateRatings = {};
      this.dateRange.forEach(function(xAxisDate) {
        xAxisDateRatings[xAxisDate] = null;
      });

      variable.entries.forEach(
        function(entry) {
          if (this.dateRange.includes(entry.created_at)) {
            xAxisDateRatings[entry.created_at] = entry.rating;
          }
        }.bind(this)
      );

      console.log("xAxisDateRatings object:", xAxisDateRatings);

      var newSeriesData = [];

      for (const rating in xAxisDateRatings) {
        newSeriesData.push(xAxisDateRatings[rating]);
      }
      console.log("New Series Data:", newSeriesData);

      var newSeries = {};
      newSeries.name = variable.name;
      newSeries.data = newSeriesData;

      this.chartOptions.series.push(newSeries);
    },
  },
};
</script>
