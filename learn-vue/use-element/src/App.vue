<template>
  <div id="app">
    <RemoteSearchSelect />
  </div>
</template>

<script>
import RemoteSearchSelect from "@/components/RemoteSearchSelect";

export default {
  name: 'App',
  components: {
    RemoteSearchSelect
  }
}
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
