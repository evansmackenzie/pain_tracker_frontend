<template>
  <div class="posts-index">
    <!-- Breadcrumbs -->
    <section class="g-bg-gray-light-v5 g-py-40">
      <div class="container text-center">
        <h2 class="h2 g-color-black g-font-size-50 g-font-weight-600">
          Daily Journal
        </h2>
      </div>
    </section>
    <!-- End Breadcrumbs -->
    <form class="g-brd-around g-brd-gray-light-v4 g-pa-15 g-mb-20">
      <div class="form-group row justify-content-center g-mb-15">
        <label for="example-date-input" class="col-2 col-form-label"
          >Search By Specific Date</label
        >
        <div class="col-3">
          <input
            class="form-control rounded-0 form-control-md"
            type="text"
            value="2011-08-19"
            id="example-date-input"
            v-model="filter"
            list="created_at"
          />
          <datalist id="created_at">
            <option v-for="post in posts" v-bind:key="post.id">
              {{ post.created_at }}
            </option>
          </datalist>
        </div>
      </div>
    </form>
    <!-- End Textual Inputs -->
    <a href="/posts/new" class="btn btn-md u-btn-primary g-mr-10 g-mb-15"
      >New Journal Entry</a
    >
    <!-- Blog Minimal Blocks -->
    <div
      class="container g-py-15"
      v-for="post in filterBy(posts, filter)"
      v-bind:key="post.id"
    >
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <!-- Blog Minimal Blocks -->
          <article class="g-mb-100">
            <div class="g-mb-30">
              <span
                class="d-block g-color-gray-dark-v4 g-font-weight-700 g-font-size-20 text-uppercase mb-2"
                >written {{ post.created_at }}</span
              >

              <p class="g-color-gray-dark-v4 g-font-size-18 g-line-height-1_8">
                {{ post.body.slice(0, 150) }} . . .
              </p>
              <a class="g-font-size-15" :href="`posts/${post.id}`"
                >Read more...</a
              >
            </div>
          </article>
          <!-- End Blog Minimal Blocks -->
        </div>
      </div>
    </div>
    <!-- End Blog Minimal Blocks -->
    <nav class="text-center" aria-label="Page Navigation">
      <ul class="list-inline">
        <li class="list-inline-item float-left g-hidden-xs-down">
          <a
            class="u-pagination-v1__item u-pagination-v1-4 g-brd-gray-light-v3 g-brd-primary--hover g-rounded-50 g-pa-7-16"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">
              <i class="fa fa-angle-left g-mr-5"></i> Previous
            </span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="list-inline-item">
          <a
            class="u-pagination-v1__item u-pagination-v1-4 u-pagination-v1-4--active g-rounded-50 g-pa-7-14"
            href="#"
            >1</a
          >
        </li>
        <li class="list-inline-item">
          <a
            class="u-pagination-v1__item u-pagination-v1-4 g-rounded-50 g-pa-7-14"
            href="#"
            >2</a
          >
        </li>
        <li class="list-inline-item float-right g-hidden-xs-down">
          <a
            class="u-pagination-v1__item u-pagination-v1-4 g-brd-gray-light-v3 g-brd-primary--hover g-rounded-50 g-pa-7-16"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">
              Next <i class="fa fa-angle-right g-ml-5"></i>
            </span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>

    <a
      class="js-go-to u-go-to-v1"
      href="#"
      data-type="fixed"
      data-position='{
     "bottom": 15,
     "right": 15
   }'
      data-offset-top="400"
      data-compensation="#js-header"
      data-show-effect="zoomIn"
    >
      <i class="hs-icon hs-icon-arrow-top"></i>
    </a>

    <!-- <div class="container">
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
    </div> -->
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
      var length = this.posts[0].body.length;
      console.log(length);
    });
  },
  methods: {},
};
</script>
