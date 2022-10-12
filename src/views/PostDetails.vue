<template>
  <div id="postdetails">
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "PostDetails",
  setup() {
    const showIdPost = () => {
      router.push({ name: "home" });
    };
    return {
      showIdPost,
    };
  },
};
</script>
