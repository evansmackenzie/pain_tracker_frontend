<template>
  <div class="PostsNew">
    <div class="container">
      <form v-on:submit.prevent="postNew()">
        <p v-if="!$parent.loggedIn()">Please log in to create post</p>
        <h1>Create New Post</h1>

        <ul>
          <li class="text-danger" v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
        <div class="form-group">
          <label>Body:</label>
          <input type="text" class="form-control" v-model="body" /> <br />
        </div>

        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      body: "",
      userId: "",
      errors: [],
      status: "",
    };
  },
  methods: {
    postNew: function() {
      var params = {
        body: this.body,
        // user_id: this.userId,
      };
      axios
        .post("/api/posts", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
