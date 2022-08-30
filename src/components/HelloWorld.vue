<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <li v-for="post in posts" :key="post.id">
      {{ post.id }}
      {{ post.title }}
      <div>
        <button>Voir</button>
      </div>
    </li>
    <!-- <ul>
      {{ post }}
    </ul> -->
  </div>
</template>

<script>
import axios from 'axios'
import {ref, onMounted} from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const posts = ref([]);
    // const test = () => {
    //   router.push(`/posts/:${posts.value}`);
    // };
    onMounted(async () => {
      try {
        await axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            console.log(response.data);
            console.log("ok");
            posts.value = response.data;
          });
      } catch (error) {
        console.log(error);
      }
    });
    return {
      posts,
    };
    // const post = ref([])

    // const loadPost = async () => {
    //   try {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //     post.value = response
    //   } catch(err) {
    //     console.log(err);
    //   }
    // }
    // loadPost()  




    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(response => {
    //   // handle repose
    //   post.value = response
    // })
    // return {
    //   post
    // }
  }
  // faire un onMounted
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
