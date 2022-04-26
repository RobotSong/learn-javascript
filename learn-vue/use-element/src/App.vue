<template>
  <div id="app">
    <RecurrentTableBug />
  </div>
</template>

<script>
import RecurrentTableBug from "@/components/RecurrentTableBug";

export default {
  name: 'App',
  components: {
    RecurrentTableBug
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  font-size: 16px;
}
</style>
