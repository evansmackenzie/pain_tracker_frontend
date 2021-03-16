<template>
  <div class="posts-index">
    <div class="container">
      <div>
        search by date: <input type="text" v-model="filter" list="created_at" />
      </div>
      <datalist id="created_at">
        <option v-for="post in posts" v-bind:key="post.id">
          {{ post.created_at }}
        </option>
      </datalist>
    </div>
    <h1>My Pain Journal</h1>
    <router-link to="/posts/new" tag="button">Create Journal Entry</router-link>
    <div v-for="post in filterBy(posts, filter)" v-bind:key="post.id">
      <p>written {{ post.created_at }}</p>
      <p>{{ post.body }}</p>
      <router-link :to="`posts/${post.id}`" tag="button">More Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      posts: [],
      filter: "",
      setAttribute: "",
    };
  },
  created: function() {
    axios.get(`/api/posts`).then((response) => {
      console.log(response.data);
      this.posts = response.data;
    });
  },
  methods: {},
};
</script>
