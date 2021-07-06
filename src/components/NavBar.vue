<template>
  <nav>
    <ul>
      <a href=""><li>Home</li></a>
      <a href=""><li>Contact</li></a>
      <a href=""><li>Setting</li></a>
      <a href=""><li>About Us</li></a>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style>
ul {
  display: flex;
  justify-content: center;
  padding: 10px;
}
li {
  list-style: none;
  margin: 10px;
  font-size: 1.5rem;
  font-weight: bold;
}
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: red;
}
</style>