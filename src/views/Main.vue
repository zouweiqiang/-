<template>
  <el-container style="height: 100%">
    <el-aside width="aoto">
      <commen-aside></commen-aside>
    </el-aside>
    <el-container>
      <el-header>
        <commen-header></commen-header>
      </el-header>
      <commen-tag></commen-tag>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

import CommenAside from "../components/CommenAside.vue";
import CommenHeader from "../components/CommenHeader.vue";
import CommenTag from "../components/CommenTag";

export default {
  name: "Main",
  components: {
    CommenAside,
    CommenHeader,
    CommenTag
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  background: #2d2c2d;
}
</style>
