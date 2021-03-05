<template>
  <div class="PostShow">
    <div>
      <p>user id: {{ post.user_id }}</p>
      <p>body: {{ post.body }}</p>
    </div>
    <div v-if="post.user_id == $parent.getUserID()">
      <router-link :to="`/posts/${post.id}/edit`">Edit</router-link>
      <button v-on:click="postDestroy()">Delete Post</button>
    </div>
    <!-- <router-link :to="`/posts/${post.id}/edit`">Edit</router-link>
    <button v-on:click="postDestroy()">Delete Post</button> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      post: {},
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.post = response.data;
    });
  },
  methods: {
    postDestroy: function() {
      if (confirm("Are you sure you want to delete this post?")) {
        axios.delete(`/api/posts/${this.$route.params.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        });
      }
    },
  },
};
</script>
