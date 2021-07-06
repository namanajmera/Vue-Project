<template>
  <nav>
    <ul>
      <router-link to="/home"
        ><a href=""><li>Home</li></a></router-link
      >
      <router-link to="/contact"
        ><a href=""><li>Contact</li></a></router-link
      >
      <router-link to="/setting"
        ><a href=""><li>Setting</li></a></router-link
      >
      <router-link to="/about"
        ><a href=""><li>About Us</li></a></router-link
      >
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style>
@import url("../css/navbar.css");
</style>