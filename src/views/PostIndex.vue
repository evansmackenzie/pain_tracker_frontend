<template>
  <div class="PostIndex">
    <h1>My Pain Journal</h1>
    <router-link to="/posts/new">Create Journal Entry</router-link>
    <div v-for="post in posts" v-bind:key="post.id">
      <p>written {{ post.created_at }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      posts: [],
    };
  },
  created: function() {
    axios.get(`/api/posts`).then((response) => {
      console.log(response.data);
      this.posts = response.data;
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
