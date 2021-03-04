<template>
  <div class="UserShow">
    <div></div>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Variables: {{ user.variables }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
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
