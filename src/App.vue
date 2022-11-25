<script setup>
import SideBar from "./components/controls/SideBar.vue"
import { ref, onMounted, inject, reactive } from 'vue'

onMounted(async () => {
  console.log('App.vue---onMounted---')
})

</script>

<template>

  <el-container>
    <el-aside width="200px">
      <SideBar class="sideBar"></SideBar>
    </el-aside>
    <el-main class="content">
      <router-view></router-view>
    </el-main>
  </el-container>

</template>



<style scoped>
.content {
  display: grid;
  margin-right: 50px;
}

.sideBar {
  height: 100%;
}
</style>
