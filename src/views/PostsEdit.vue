<template>
  <div class="posts-edit">
    <form v-on:submit.prevent="postEdit()">
      <h1>Update Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Body:</label>
        <p style="white-space: pre-line;"></p>
        <textarea v-model="post.body"></textarea>
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <button v-on:click="postDestroy()">Delete Profile</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      post: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.post = response.data;
    });
  },
  methods: {
    postEdit: function() {
      var params = {
        body: this.post.body,
        // user_id: this.post.userId,
      };
      axios
        .patch(`/api/posts/${this.$route.params.id}`, params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/posts`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    postDestroy: function() {
      if (confirm("Are you sure you want to delete your post entry?")) {
        axios.delete(`/api/posts/${this.$route.params.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        });
      }
    },
  },
};
</script>
