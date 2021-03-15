import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import HighchartsVue from 'highcharts-vue';
import Vue2Filters from 'vue2-filters';

Vue.use(Vue2Filters);

Vue.use(HighchartsVue);

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  mixins: [Vue2Filters.mixin],
  render: h => h(App)
}).$mount("#app");
