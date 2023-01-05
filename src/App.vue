<script setup>
import SideBar from "./components/controls/SideBar.vue"
import { ref, onMounted, inject, reactive } from 'vue'
import { store } from './store/store.js'

const weatherApi = inject("$weatherApi");
const methods = {
  getWeatherData() {
    var weatherStr = localStorage.getItem("weather");
    if (weatherStr == null || weatherStr === '') {
      console.log('localStorage无数据');
      weatherStr = weatherApi.getWeatherData();
    }
    else {
      console.log('localStorage成功获取数据');
    }
    var weather = JSON.parse(weatherStr);
    console.log('App.vue.getWeatherData---', weather);
    store.weather = weather;
    localStorage.setItem("weather", JSON.stringify(weather));
  },
}

onMounted(() => {
  console.log('App.vue---onMounted---');
  methods.getWeatherData();
})

</script>

<template>
  <el-container>

    <el-aside width="200px">
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
.common-layout {
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
