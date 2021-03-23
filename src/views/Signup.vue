<template>
  <div class="signup">
    <!-- Signup -->
    <section class="g-bg-gray-light-v5">
      <div class="container g-py-100">
        <div class="row justify-content-center">
          <div class="col-sm-10 col-md-9 col-lg-6">
            <div class="u-shadow-v21 g-bg-white rounded g-py-40 g-px-30">
              <header class="text-center mb-4">
                <h2 class="h2 g-color-black g-font-weight-600">Signup</h2>
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
                    >Name:</label
                  >
                  <input
                    class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                    type="text"
                    placeholder="John"
                    v-model="name"
                  />
                </div>
                <!-- my code -->
                <!-- <div class="form-group">
                  <label>Name:</label>
                  <input type="text" class="form-control" v-model="name" />
                </div> -->

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

                <div class="row">
                  <div class="col-xs-12 col-sm-6 mb-4">
                    <label
                      class="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13"
                      >Password:</label
                    >
                    <input
                      class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                      type="password"
                      placeholder="Password"
                      v-model="password"
                    />
                  </div>
                  <!-- my code -->
                  <!-- <div class="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="password"
                    />
                  </div> -->

                  <div class="col-xs-12 col-sm-6 mb-4">
                    <label
                      class="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13"
                      >Confirm Password:</label
                    >
                    <input
                      class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                      type="password"
                      placeholder="Password"
                      v-model="passwordConfirmation"
                    />
                  </div>
                  <!-- my code -->
                  <!-- <div class="form-group">
                    <label>Password confirmation:</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="passwordConfirmation"
                    />
                  </div> -->
                </div>
                <div class="mb-4">
                  <input type="submit" class="btn btn-primary" value="Signup" />
                </div>
              </form>
              <!-- End Form -->

              <footer class="text-center">
                <p class="g-color-gray-dark-v5 g-font-size-13 mb-0">
                  Already have an account?
                  <router-link class="g-font-weight-600" to="/login"
                    >Login</router-link
                  >
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Signup -->

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

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
