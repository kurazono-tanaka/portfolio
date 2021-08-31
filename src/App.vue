<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./css/destyle.css";

html {
  height: 100%;
}

body {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#app {
  height: 100%;
}

</style>
