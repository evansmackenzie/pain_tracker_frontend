<template>
  <div class="users-edit">
    <form v-on:submit.prevent="userEdit()">
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
      <!-- <div class="form-group">
        <label>User Id:</label>
        <input type="text" class="form-control" v-model="user.userId">
      </div> -->
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <button v-on:click="userDestroy()">Delete Profile</button>
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
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
