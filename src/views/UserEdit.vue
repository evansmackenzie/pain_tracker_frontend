<template>
  <div class="UserEdit">
    <form v-on:submit.prevent="userEdit()">
      <h1>Update User</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="post.title" />
      </div>
      <div class="form-group">
        <label>Body:</label>
        <input type="text" class="form-control" v-model="post.body" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="post.image" />
      </div>
      <!-- <div class="form-group">
        <label>User Id:</label>
        <input type="text" class="form-control" v-model="post.userId">
      </div> -->
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
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
        title: this.user.title,
        body: this.user.body,
        image: this.user.image,
        // user_id: this.post.userId,
      };
      axios
        .patch(`/api/users/${this.$route.params.id}`, params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`users/${response.data.user_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
