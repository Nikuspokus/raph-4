import { createRouter, createWebHistory } from "vue-router";
import PostDetails from "@/views/PostDetails";
import PostList from "@/views/PostList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PostList,
  },
  {
    path: "/postdetails/:id",
    name: "postdetails",
    component: PostDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
