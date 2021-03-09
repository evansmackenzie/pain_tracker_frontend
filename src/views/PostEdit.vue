<template>
  <div class="PostEdit">
    <form v-on:submit.prevent="postEdit()">
      <h1>Update Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Body:</label>
        <input type="text" class="form-control" v-model="post.body" />
      </div>
      <!-- <div class="form-group">
        <label>User Id:</label>
        <input type="text" class="form-control" v-model="user.userId">
      </div> -->
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
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
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
