import * as VueRouter from "vue-router";
import PostDetails from "@/components/PostDetails";
import HelloWorld from "@/views/HelloWorld.vue";

const router = VueRouter.createRouter({
  mode: "history",
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorld,
    },
    {
      path: "/postdetails/:id",
      name: "postdetails",
      component: PostDetails,
    },
  ],
});

export default router;
