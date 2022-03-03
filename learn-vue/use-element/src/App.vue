<template>
  <div id="app">
    <h1>我的日历</h1>
    <TaskCalendar />
  </div>
</template>

<script>
import TaskCalendar from "@/components/TaskCalendar";

export default {
  name: 'App',
  components: {
    TaskCalendar
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
