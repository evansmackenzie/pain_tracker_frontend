<template>
  <div class="users-edit">
    <!-- Login -->
    <section class="container g-py-100">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-md-9 col-lg-6">
          <div class="g-brd-around g-brd-gray-light-v4 rounded g-py-40 g-px-30">
            <header class="text-center mb-4">
              <h2 class="h2 g-color-black g-font-weight-600">
                Update Profile Information
              </h2>
            </header>

            <!-- Form -->
            <form class="g-py-15" v-on:submit.prevent="userEdit()">
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
                  v-model="user.name"
                />
              </div>
              <div class="mb-4">
                <label
                  class="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13"
                  >Email:</label
                >
                <input
                  class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                  type="email"
                  v-model="user.email"
                />
              </div>
              <div class="mb-4">
                <label
                  class="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13"
                  >Image URL:</label
                >
                <input
                  class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                  type="text"
                  v-model="user.image_url"
                />
              </div>
              <div class="mb-4">
                <label
                  class="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13"
                  >Password:</label
                >
                <input
                  class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                  type="text"
                  v-model="user.password"
                />
              </div>
              <input
                type="submit"
                class="btn btn-md u-btn-primary g-mr-10 g-mb-15"
                value="Submit"
              />
              <a
                v-on:click="userDestroy()"
                class="btn btn-md u-btn-red g-mr-10 g-mb-15"
                >Delete Profile</a
              >
            </form>
            <!-- End Form -->
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

    <!-- <form v-on:submit.prevent="userEdit()">
      <h1>Update User</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="user.name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="text" class="form-control" v-model="user.email" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="user.image_url" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="text" class="form-control" v-model="user.password" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <button v-on:click="userDestroy()">Delete Profile</button> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    userEdit: function() {
      var params = {
        name: this.user.name,
        email: this.user.email,
        image_url: this.user.image_url,
        password: this.user.password,
        // user_id: this.post.userId,
      };
      axios
        .patch(`/api/users/${this.$route.params.id}`, params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/users/${this.$route.params.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    userDestroy: function() {
      if (
        confirm(
          "Are you sure you want to delete your profile and all of your tracking?"
        )
      ) {
        axios.delete(`/api/users/${this.$route.params.id}`).then((response) => {
          console.log(response.data);
        });
      }
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
};
</script>
