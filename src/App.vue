<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <listone></listone>
  </div>
</template>

<script>
import listone from './components/listone'
export default {
  name: 'App',
  components: {
    listone
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html {
  background: #f6f6f6
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
