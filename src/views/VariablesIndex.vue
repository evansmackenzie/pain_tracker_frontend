<template>
  <div class="variables-index">
    <!-- Breadcrumbs -->
    <section class="g-bg-gray-light-v5 g-py-40">
      <div class="container text-center">
        <h2 class="h2 g-color-black g-font-size-40 g-font-weight-600">
          Your Variables Chart
        </h2>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <!-- Portfolio Single Item -->
    <section class="container g-py-100">
      <div class="row g-mb-50">
        <div class="col-md-8 g-mb-30">
          <div class="mb-5">
            <h2 class="g-color-black mb-1">Variable Data</h2>
            <span class="d-block lead mb-4"
              >Why Keeping Track of Your Symptoms Matters</span
            >
            <p>
              This is where we sit down, grab a cup of coffee and dial in the
              details. Understanding the task at hand and ironing out the
              wrinkles is key. Whether through commerce or just an experience to
              tell your brand's story, the time has come to start using
              development languages that fit your projects needs.
            </p>
            <p>
              Whether through commerce or just an experience to tell your
              brand's story, the time has come to start using development
              languages that fit your projects needs. The time has come to bring
              those ideas and plans to life. This is where we really begin to
              visualize your napkin sketches and make them into beautiful
              pixels. We get it, you're busy and it's important that someone
              keeps up with marketing and driving people to your brand. We've
              got you covered. Working together on the daily requires each
              individual to let the greater good of the team’s work surface
              above their own ego.
            </p>

            <div>
              <label>Date Search:</label>
              <input type="text" v-model="newFinalDate" />
            </div>
            <button
              class="btn btn-md u-btn-primary g-mr-10 g-mb-15"
              v-on:click="generateXAxisCategories(newFinalDate)"
            >
              Search
            </button>
          </div>
        </div>

        <div class="col-md-4 g-mb-30">
          <!-- Share -->
          <div class="mb-3">
            <h3 class="h5 g-color-black mb-3">Plot Your Variables</h3>
            <div v-for="variable in variables" v-bind:key="variable.id">
              <p>{{ variable.name }}</p>

              <ul class="list-inline mb-0">
                <li class="list-inline-item mr-1 mb-1">
                  <!-- <button
                    class="btn btn-md u-btn-outline-primary g-mr-10 g-mb-15"
                    v-on:click="plotVariable(variable)"
                  >
                    add to chart
                  </button> -->
                  <a
                    class="btn btn-md u-btn-outline-primary g-mr-10 g-mb-15"
                    v-on:click="plotVariable(variable)"
                  >
                    add to chart
                  </a>
                </li>
                <li class="list-inline-item mx-1 mb-1">
                  <a
                    class="btn btn-md u-btn-outline-teal g-mr-10 g-mb-15"
                    :href="`/variables/${variable.id}`"
                  >
                    more info
                  </a>
                  <!-- <button
                    class="btn btn-md u-btn-outline-teal g-mr-10 g-mb-15"
                    :to="`/variables/${variable.id}`"
                  >
                    more info
                  </button> -->
                </li>
              </ul>
            </div>
          </div>
          <!-- End Share -->
        </div>
      </div>

      <!-- Cube Portfolio Blocks - Content -->
      <div
        class="cbp g-mb-100"
        data-controls="#filterControls1"
        data-animation="quicksand"
        data-x-gap="30"
        data-y-gap="30"
        data-media-queries='[{"width": 1500, "cols": 3}, {"width": 1100, "cols": 3}, {"width": 800, "cols": 3}, {"width": 480, "cols": 2}, {"width": 300, "cols": 1}]'
      >
        <div>
          <highcharts
            class="hc"
            :options="chartOptions"
            ref="chart"
          ></highcharts>
        </div>
      </div>
      <!-- End Cube Portfolio Blocks - Content -->
    </section>
    <!-- End Portfolio Single Item -->

    <a
      class="js-go-to u-go-to-v1"
      href="#"
      data-type="fixed"
      data-position='{
     "bottom": 15,
     "right": 15
   }'
      data-offset-top="400"
      data-compensation="#js-header"
      data-show-effect="zoomIn"
    >
      <i class="hs-icon hs-icon-arrow-top"></i>
    </a>

    <!-- my code -->
    <!-- <h1>Graph of Variables</h1>
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
    </div> -->
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
          text: "Compare Variables",
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
