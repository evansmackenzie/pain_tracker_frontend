<template>
  <div class="UserShow">
    <router-link to="/posts">Journal</router-link>
    <div></div>
    <p>Name: {{ user.name }}</p>
    <img v-bind:src="user.image_url" alt="" />
    <p>Email: {{ user.email }}</p>
    <p>Variables:</p>
    <div v-for="variable in variables" v-bind:key="variable.id">
      <p>{{ variable.name }}</p>
      <input type="text" v-model="value" />
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
      value: "",
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
  },
};
</script>
