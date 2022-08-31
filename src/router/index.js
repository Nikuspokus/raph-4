import Vue from "vue";
import Router from "vue-router";
import Post from "@/views/Post";
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorld
    },
    {
      path: "/post/:id",
      name: "post",
      component: Post
    }
  ]
});
