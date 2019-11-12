<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #303133;
  background-color: #8b81c3;
  height: 100%;
  width: 100%;
}
a {
  text-decoration: none;
  color: #303133;
}

a:hover {
  color: #F2107D;
}

p {
  font-family: sans-serif;
  text-indent: 37px;
  letter-spacing: 2px;
}
</style>
