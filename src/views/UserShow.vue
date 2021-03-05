<template>
  <div class="UserShow">
    <router-link to="/posts">Journal</router-link>
    <div></div>
    <p>Name: {{ user.name }}</p>
    <img v-bind:src="user.image_url" alt="" />
    <p>Email: {{ user.email }}</p>
    <router-link :to="`/users/${user.id}/edit`">Edit</router-link>
    <p>Variables:</p>
    <div v-for="variable in variables" v-bind:key="variable.id">
      <p>Name: {{ variable.name }}</p>
      <button v-on:click="variableEntryFormToggle = variable.id">
        Enter Value
      </button>
      <div v-if="variableEntryFormToggle === variable.id">
        <form v-on:submit.prevent="entryNew(variable)">
          <ul>
            <li class="text-danger" v-for="error in errors" v-bind:key="error">
              {{ error }}
            </li>
          </ul>
          <div class="form-group">
            <label>entry:</label>
            <input type="text" class="form-control" v-model="value" /> <br />
          </div>
          <input type="submit" class="btn btn-primary" value="Submit" />
        </form>
      </div>
    </div>
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
      errors: [],
      variableEntryFormToggle: null,
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
      this.variables = response.data.variables;
    });
  },
  methods: {
    postDestroy: function() {
      if (confirm("Are you sure you want to delete this user?")) {
        axios.delete(`/api/users/${this.$route.params.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/users");
        });
      }
    },
    entryNew: function(variable) {
      var params = {
        variable_id: variable.id,
        value: this.value,
        // user_id: this.userId,
      };
      axios
        .post("/api/entries", params)
        .then((response) => {
          console.log(response.data);
          // this.$router.push(`users/${response.data.variable.user}`);
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
