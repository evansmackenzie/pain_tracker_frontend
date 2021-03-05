import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersShow from "../views/UserShow.vue";
import PostsIndex from "../views/PostIndex.vue";
import PostsNew from "../views/PostNew.vue";
import UsersEdit from "../views/UserEdit.vue";
import PostsShow from "../views/PostShow.vue";
import PostsEdit from "../views/PostEdit";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: "/users/:id",
    name: "UserShow",
    component: UsersShow
  },
  {
    path: "/posts",
    name: "PostIndex",
    component: PostsIndex
  },
  {
    path: "/posts/new",
    name: "PostNew",
    component: PostsNew
  },
  {
    path: "/users/:id/edit",
    name: "UserEdit",
    component: UsersEdit
  },
  {
    path: "/posts/:id",
    name: "PostShow",
    component: PostsShow
  },
  {
    path: "/posts/:id/edit",
    name: "PostEdit",
    component: PostsEdit
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
