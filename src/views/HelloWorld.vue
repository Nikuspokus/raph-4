<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div style="width: 650px; margin-left: auto; margin-right: auto">
      <ol class="list-post" v-for="post in posts" :key="post.id">
        <div>
          <table class="table-line">
            <strong>{{ post.id }}</strong>
            {{
              post.title
            }}
            <!-- <router-link :to="`/post/${post.id}`"> -->
            <button @click="showIdPost(post)">Voir</button>
            <!-- <button>Voir</button> -->
          </table>
        </div>
      </ol>
    </div>
  </div>
  <router-view class="view"></router-view>
</template>

<script>
import router from "@/router";
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "HelloWorld",
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

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.table-line {
  width: 650px;
  display: flex;
  justify-content: space-between;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 10px;
}
.list-post {
  justify-content: center;
  margin: auto;
  padding: 10px;
}
</style>
