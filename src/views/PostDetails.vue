<template>
  <div class="d-flex justify-content-center">
    <div style="width: 80vw; height: 300px; margin: auto">
      <!-- <div style="width: 80vw; height: 300px"> -->
      <!-- <table class="table-line"> -->
      <div class="col">
        <div class="col">
          <strong>{{ post.title }}</strong>
          <textarea
            style="width: 100%"
            size="100"
            type="text"
            v-model="post.title"
          ></textarea>
          <p>{{ title }}</p>
        </div>
        <div class="row">
          <strong>{{ post.body }}</strong>
          <!-- <input type="text" v-model="post.body" /> -->
          <textarea
            style="width: 100%; height: 90px"
            type="text"
            v-model="post.body"
          >
          </textarea>
          <p>{{ body }}</p>
        </div>
      </div>
      <!-- </table> -->
    </div>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "PostDetails",
  setup() {
    const route = useRoute();
    const post = ref("");
    const title = ref("");
    const body = ref("");

    console.log(post);

    onMounted(async () => {
      try {
        await axios
          .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then((response) => {
            post.value = response.data;
          });
      } catch (error) {
        console.log(error);
      }
    });
    return {
      post,
      title,
      body,
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
.table-line > p {
  width: 650px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
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
