<template>
  <div class="users-show">
    <!-- Breadcrumb -->
    <section class="g-my-30">
      <div class="container">
        <ul class="u-list-inline">
          <li class="list-inline-item g-color-primary">
            <span>User Profile</span>
          </li>
        </ul>
      </div>
    </section>
    <!-- End Breadcrumb -->

    <section class="g-mb-100">
      <div class="container">
        <div class="row">
          <!-- Profile Sidebar -->
          <div class="col-lg-3 g-mb-50 g-mb-0--lg">
            <!-- User Image -->
            <div class="u-block-hover g-pos-rel">
              <figure>
                <img
                  class="img-fluid w-100 u-block-hover__main--zoom-v1"
                  v-bind:src="user.image_url"
                  alt="Image Description"
                />
              </figure>

              <!-- Figure Caption -->
              <figcaption
                class="u-block-hover__additional--fade g-bg-black-opacity-0_5 g-pa-30"
              >
                <div
                  class="u-block-hover__additional--fade u-block-hover__additional--fade-up g-flex-middle"
                >
                  <!-- Figure Social Icons -->
                  <ul
                    class="list-inline text-center g-flex-middle-item--bottom g-mb-20"
                  >
                    <li class="list-inline-item align-middle g-mx-7">
                      <a
                        class="u-icon-v1 u-icon-size--md g-color-white"
                        :href="`/users/${user.id}/edit`"
                      >
                        <i class="icon-note u-line-icon-pro"></i>
                      </a>
                    </li>
                  </ul>
                  <!-- End Figure Social Icons -->
                </div>
              </figcaption>
              <!-- End Figure Caption -->

              <!-- User Info -->
              <span class="g-pos-abs g-top-20 g-left-0">
                <a class="btn btn-sm u-btn-primary rounded-0" href="#">{{
                  user.name
                }}</a>
              </span>
              <!-- End User Info -->
            </div>
            <!-- User Image -->

            <!-- Sidebar Navigation -->
            <div class="list-group list-group-border-0 g-mb-40">
              <!-- Settings -->
              <a
                href="/posts"
                class="list-group-item list-group-item-action justify-content-between"
              >
                <!-- <router-link to="/posts" tag="button">Journal</router-link> -->
                <span
                  ><i class="icon-settings g-pos-rel g-top-1 g-mr-8"></i>
                  Journal</span
                >
              </a>
              <!-- End Settings -->
              <!-- Settings -->
              <a
                href="/variables"
                class="list-group-item list-group-item-action justify-content-between"
              >
                <span
                  ><i class="icon-settings g-pos-rel g-top-1 g-mr-8"></i>
                  Variables Graphs</span
                >
              </a>
              <!-- General Forms -->
              <form
                class="g-brd-around g-brd-gray-light-v4 g-pa-30 g-mb-30"
                v-on:submit.prevent="variableNew()"
              >
                <!-- Text Input -->
                <ul>
                  <li
                    class="text-danger"
                    v-for="error in errors"
                    v-bind:key="error"
                  >
                    {{ error }}
                  </li>
                </ul>
                <div class="form-group g-mb-20">
                  <label class="g-mb-10" for="inputGroup1_1"
                    >Make a New Variable</label
                  >
                  <input
                    id="inputGroup1_1"
                    class="form-control form-control-md rounded-0"
                    type="text"
                    placeholder="new variable"
                    v-model="newVariable"
                  />
                  <small
                    class="form-text text-muted g-font-size-default g-mt-10"
                    >What behaviors or activities impact your symptoms?</small
                  >
                  <input type="submit" class="btn btn-primary" value="Submit" />
                </div>
                <!-- End Text Input -->
              </form>
              <!-- End General Forms -->
              <!-- End Settings -->
            </div>
            <!-- End Sidebar Navigation -->
          </div>
          <!-- End Profile Sidebar -->

          <!-- Profle Content -->
          <div class="col-lg-9">
            <!-- User Block -->
            <div class="g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-40">
              <div class="row">
                <!-- <div class="col-lg-4 g-mb-40 g-mb-0--lg"></div> -->

                <div class="row">
                  <!-- User Details -->
                  <div
                    class="d-flex align-items-center justify-content-sm-between g-mb-5"
                  >
                    <h2 class="g-font-weight-300 g-mr-10">{{ user.name }}</h2>
                  </div>
                  <!-- End User Details -->

                  <hr class="g-brd-gray-light-v4 g-my-20" />

                  <p class="lead g-line-height-1_8">
                    Welcome buddy! This is the page where you will do most of
                    your heavy lifting. The idea is to think of some things
                    (variables) that you think are important to track, i.e
                    things that affect youir pain. You can create your variables
                    here, and then all of the variables you create will be
                    displayed on this page. For each variable, you will track a
                    "value" and a "rating". A rating is a number from 1-10, and
                    is meant to reflect how you feel about how you did on a
                    current variable for that day. The value is the actual
                    amount of whatever that variable is. To make things a bit
                    clearer, if you think the amount of sleep you get impacts
                    your pain experience, "hours slept" can be your variable.
                    Say you sleep 8 hours one night. Your value would be 8, and
                    your rating could be a 9 or 10 (since 8 seems like a pretty
                    ideal amount of sleep). Have fun, and feel better!
                  </p>

                  <hr class="g-brd-gray-light-v4 g-my-20" />
                </div>
              </div>
            </div>
            <!-- End User Block -->

            <!-- Experience Timeline -->
            <div class="card border-0 rounded-0 g-mb-40">
              <!-- Panel Header -->
              <div
                class="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15"
              >
                <h3 class="h6 mb-0">
                  <i class="icon-briefcase g-pos-rel g-top-1 g-mr-5"></i>
                  Variables
                </h3>
              </div>
              <!-- End Panel Header -->

              <!-- General Forms -->
              <form
                class="g-brd-around g-brd-gray-light-v4 g-pa-30 g-mb-30"
                v-for="variable in variables"
                v-bind:key="variable.id"
                v-on:submit.prevent="entryNew(variable)"
              >
                <h4 class="h6 g-font-weight-700 g-mb-20">
                  Name: {{ variable.name }}
                </h4>
                <ul>
                  <li
                    class="text-danger"
                    v-for="error in errors"
                    v-bind:key="error"
                  >
                    {{ error }}
                  </li>
                </ul>

                <p
                  v-if="
                    variable.last_entry &&
                      variable.last_entry.created_at == today
                  "
                >
                  Value:{{ variable.last_entry.value }}, Rating:{{
                    variable.last_entry.rating
                  }}
                </p>

                <div
                  class="form-group row g-mb-25"
                  v-if="
                    (variable.last_entry &&
                      variable.last_entry.created_at != today) ||
                      !variable.last_entry
                  "
                >
                  <label class="col-sm-3 col-form-label g-mb-10">Value</label>
                  <div class="col-sm-9">
                    <div class="input-group g-brd-primary--focus">
                      <input
                        class="form-control form-control-md border-right-0 rounded-0 pr-0"
                        type="text"
                        v-model="variable.value"
                        :id="variable.id"
                      />
                      <div class="input-group-append">
                        <span
                          class="input-group-text rounded-0 g-bg-white g-color-gray-light-v1"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Text Input with Right Appended Icon -->
                <div
                  class="form-group row g-mb-25"
                  v-if="
                    (variable.last_entry &&
                      variable.last_entry.created_at != today) ||
                      !variable.last_entry
                  "
                >
                  <label class="col-sm-3 col-form-label g-mb-10">Rating</label>
                  <div class="col-sm-9">
                    <div class="input-group g-brd-primary--focus">
                      <input
                        class="form-control form-control-md border-right-0 rounded-0 pr-0"
                        type="text"
                        v-model="variable.rating"
                        :id="variable.id"
                      />
                      <div class="input-group-append">
                        <span
                          class="input-group-text rounded-0 g-bg-white g-color-gray-light-v1"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  class="btn btn-md u-btn-primary g-mr-10 g-mb-15"
                  value="Submit"
                />
                <input
                  v-on:click="variableDestroy(variable)"
                  class="btn btn-md u-btn-red g-mr-10 g-mb-15"
                  value="Delete Variable"
                />
                <!-- <a
                  v-on:click="variableDestroy(variable)"
                  class="btn btn-md u-btn-red g-mr-10 g-mb-15"
                  >Delete Variable</a
                > -->
              </form>
              <!-- End General Forms -->
            </div>
            <!-- End Experience Timeline -->
          </div>
          <!-- End Profle Content -->
        </div>
      </div>
    </section>

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

    <!-- <router-link to="/posts" tag="button">Journal</router-link>
    <div></div>
    <p>Name: {{ user.name }}</p>
    <img v-bind:src="user.image_url" alt="" />
    <p>Email: {{ user.email }}</p>
    <router-link :to="`/users/${user.id}/edit`" tag="button">Edit</router-link>
    <h2>Variables:</h2>
    <div v-for="variable in variables" v-bind:key="variable.id">
      <p>Name: {{ variable.name }}</p>

      <div>
        <p
          v-if="variable.last_entry && variable.last_entry.created_at == today"
        >
          Value:{{ variable.last_entry.value }}, Rating:{{
            variable.last_entry.rating
          }}
        </p>
        <form
          v-if="
            (variable.last_entry && variable.last_entry.created_at != today) ||
              !variable.last_entry
          "
          v-on:submit.prevent="entryNew(variable)"
        >
          <ul>
            <li class="text-danger" v-for="error in errors" v-bind:key="error">
              {{ error }}
            </li>
          </ul>
          <div class="form-group">
            <label>Value:</label>
            <input
              type="text"
              class="form-control"
              :id="variable.id"
              v-model="variable.value"
            />
            <br />
          </div>
          <div class="form-group">
            <label>Rating:</label>
            <input type="text" class="form-control" v-model="variable.rating" />
            <br />
          </div>
          <input type="submit" class="btn btn-primary" value="Submit" />
        </form>
      </div>
      <button v-on:click="variableDestroy(variable)">
        Delete Variable
      </button>
    </div>
    <form v-on:submit.prevent="variableNew()">
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Create New Variable:</label>
        <input type="text" class="form-control" v-model="newVariable" /> <br />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <router-link to="/variables" tag="button">Variable Graphs Page</router-link> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      variables: [],
      variable_id: "",
      value: "",
      rating: "",
      errors: [],
      newVariable: "",
      message: "",
      entryCreatedAt: "",
      today: "",
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
      this.variables = response.data.variables;
    });

    this.today = new Date();
    var dd = String(this.today.getDate()).padStart(2, "0");
    var mm = String(this.today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = this.today.getFullYear();
    this.today = mm + "/" + dd + "/" + yyyy;
    console.log(this.today);
  },
  methods: {
    variableDestroy: function(variable) {
      if (
        confirm(
          "Are you sure you want to delete this variable and all of the entries associated with it?"
        )
      ) {
        axios.delete(`/api/variables/${variable.id}`).then((response) => {
          console.log(response.data);
          this.message = response.data;
          for (var i = 0; i < this.variables.length; i++) {
            if (this.variables[i] === variable) {
              this.variables.splice(i, 1);
            }
          }
        });
      }
    },
    entryNew: function(variable) {
      var params = {
        variable_id: variable.id,
        value: variable.value,
        rating: variable.rating,
      };
      axios
        .post("/api/entries", params)
        .then((response) => {
          console.log(response.data);
          this.value = "";
          this.rating = "";
          this.errors = [];
          variable.last_entry = response.data;
          // this.$router.push(`users/${response.data.variable.user}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
    variableNew: function() {
      var params = {
        name: this.newVariable,
        // user_id: this.userId,
      };
      axios
        .post("/api/variables", params)
        .then((response) => {
          console.log(response.data);
          this.variables.push(response.data);
          this.newVariable = "";
          this.errors = [];
          // this.$router.push(`users/${response.data.variable.user}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
