<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// export default {
//   name: "TitleApp",
//   props: {
//     msg: String,
//   },
// };
import router from "@/router";
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "PostList",
  props: {
    msg: String,
  },
  setup() {
    const posts = ref([]);

    const showIdPost = (post) => {
      router.push({ name: "postdetails", params: { id: post.id } });
    };

    onMounted(async () => {
      try {
        await axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            posts.value = response.data;
          });
      } catch (error) {
        console.log(error);
      }
    });
    return {
      posts,
      showIdPost,
    };
  },
};
</script>
