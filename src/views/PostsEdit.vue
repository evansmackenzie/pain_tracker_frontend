<template>
  <div class="posts-edit">
    <form
      class="g-brd-around g-brd-gray-light-v4 g-pa-30 g-mb-30"
      v-on:submit.prevent="postEdit()"
    >
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>

      <div class="form-group g-mb-25">
        <label for="exampleTextarea" class="g-font-size-30">Edit Entry</label>
        <textarea
          class="form-control rounded-0 form-control-md"
          id="exampleTextarea"
          rows="6"
          v-model="post.body"
        ></textarea>
      </div>

      <input
        type="submit"
        class="btn btn-md u-btn-primary g-mr-10 g-mb-15"
        value="Submit"
      />
      <input
        v-on:click="postDestroy()"
        class="btn btn-md u-btn-red g-mr-10 g-mb-15"
        value="Delete Post"
      />
    </form>
    <!-- my code -->
    <!-- <form v-on:submit.prevent="postEdit()">
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
    <button v-on:click="postDestroy()">Delete Post</button> -->
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
