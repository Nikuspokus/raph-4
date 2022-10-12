<template>
  <div id="app">
    <HelloWorld msg="Welcome to JSONPlaceholder" />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./views/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
