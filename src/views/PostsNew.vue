<template>
  <div class="posts-new">
    <form
      class="g-brd-around g-brd-gray-light-v4 g-pa-30 g-mb-30"
      v-on:submit.prevent="postNew()"
    >
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>

      <div class="form-group g-mb-25">
        <label for="exampleTextarea" class="g-font-size-30"
          >New Journal Entry</label
        >
        <textarea
          class="form-control rounded-0 form-control-md"
          id="exampleTextarea"
          rows="6"
          v-model="body"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-md u-btn-primary rounded-0">
        Submit
      </button>
    </form>
    <!-- End General Controls -->
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
