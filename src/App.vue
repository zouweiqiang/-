<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #F5F4F6;
}
</style>

<script>
export default {
  data() {
    return {
      radio: "1",
    };
  },
};
</script>
