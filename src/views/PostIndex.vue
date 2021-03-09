<template>
  <div class="PostIndex">
    <h1>My Pain Journal</h1>
    <router-link to="/posts/new">Create Journal Entry</router-link>
    <div v-for="post in posts" v-bind:key="post.id">
      <p>written {{ relativeDate(post.created_at) }}</p>
      <p>{{ post.body }}</p>
      <router-link :to="`posts/${post.id}`">More Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

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
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
