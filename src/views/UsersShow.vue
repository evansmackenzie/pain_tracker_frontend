<template>
  <div class="users-show">
    <router-link to="/posts">Journal</router-link>
    <div></div>
    <p>Name: {{ user.name }}</p>
    <img v-bind:src="user.image_url" alt="" />
    <p>Email: {{ user.email }}</p>
    <router-link :to="`/users/${user.id}/edit`">Edit</router-link>
    <h2>Variables:</h2>
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
    <router-link to="/variables">Variable Graphs Page</router-link>
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
      newVariable: "",
      message: "",
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
        value: this.value,
        // user_id: this.userId,
      };
      axios
        .post("/api/entries", params)
        .then((response) => {
          console.log(response.data);
          this.value = "";
          this.variableEntryFormToggle = null;
          // this.$router.push(`users/${response.data.variable.user}`);
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
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
