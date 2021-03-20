<template>
  <div class="login">
    <!-- Login -->
    <section class="g-bg-gray-light-v5">
      <div class="container g-py-100">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-lg-5">
            <div class="u-shadow-v21 g-bg-white rounded g-py-40 g-px-30">
              <header class="text-center mb-4">
                <h2 class="h2 g-color-black g-font-weight-600">Login</h2>
              </header>

              <!-- Form -->
              <form class="g-py-15" v-on:submit.prevent="submit()">
                <ul>
                  <li
                    class="text-danger"
                    v-for="error in errors"
                    v-bind:key="error"
                  >
                    {{ error }}
                  </li>
                </ul>
                <div class="mb-4">
                  <label
                    class="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13"
                    >Email:</label
                  >
                  <input
                    class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    v-model="email"
                  />
                </div>
                <!-- my code -->
                <!-- <div class="form-group">
                  <label>Email:</label>
                  <input type="email" class="form-control" v-model="email" />
                </div> -->

                <div class="g-mb-35">
                  <label
                    class="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13"
                    >Password:</label
                  >
                  <input
                    class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15 mb-3"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>

                <div class="mb-4">
                  <input type="submit" class="btn btn-primary" value="Login" />
                </div>
              </form>
              <!-- End Form -->

              <footer class="text-center">
                <p class="g-color-gray-dark-v5 g-font-size-13 mb-0">
                  Don't have an account?
                  <router-link class="g-font-weight-600" to="/"
                    >signup</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Login -->

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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push(`users/${response.data.user_id}`);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
