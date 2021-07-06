<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NewHelloWorld />
    <Home msg="Data Binding Example" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NewHelloWorld from "./components/NewHelloWorld.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    NewHelloWorld,
    Home,
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
