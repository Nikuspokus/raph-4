<template>
  <div id="app">
    <TitleApp msg="Welcome to JSONPlaceholder" />
    <router-view></router-view>
  </div>
</template>

<script>
import TitleApp from "./components/TitleApp.vue";

export default {
  name: "App",
  components: {
    TitleApp,
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
