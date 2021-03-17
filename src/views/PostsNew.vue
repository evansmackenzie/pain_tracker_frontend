<template>
  <div class="posts-new">
    <div class="container" id="newPost">
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
          <p style="white-space: pre-line;"></p>
          <textarea v-model="body"></textarea>
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
