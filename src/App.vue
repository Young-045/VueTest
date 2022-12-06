<script setup>
import SideBar from "./components/controls/SideBar.vue"
import { ref, onMounted, inject, reactive } from 'vue'

onMounted(async () => {
  console.log('App.vue---onMounted---')
})

</script>

<template>
    <el-container>

      <el-aside width="200px" >
        <SideBar class="sideBar"></SideBar>
      </el-aside>

      <el-container>
        <el-main class="content">
          <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>

</template>



<style scoped>

.common-layout{
  height: 100vh;
}
.content {
  height: 100vh;
  margin-right: 50px;
}

.sideBar {
  height: 100vh;
  
}
</style>
