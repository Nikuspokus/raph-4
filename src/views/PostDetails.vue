<template>
  <div id="postdetails">
    <p></p>
    <div style="width: 650px; margin-left: auto; margin-right: auto">
      <table class="table-line">
        <tr>
          <strong>{{ post.title }}</strong>
        </tr>
        <tr>
          <strong>{{ post.body }}</strong>
        </tr>
      </table>
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
