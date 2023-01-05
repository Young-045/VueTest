<script setup >
import BarChart from '../charts/BarChart.vue'
import PieChart from "../charts/PieChart.vue"
import ChartFilter from '../controls/ChartFilter.vue';
import { store } from '../../store/store.js'
import { ref, onMounted, inject, reactive } from 'vue'

const dataCollection = reactive(
    {
        tableData: [],
    });

const methods = {
    loadData() {
        console.log('DataShow.loadData');
        dataCollection.tableData = store.weather.days;
    },
}

onMounted(() => {
    console.log('DataShow.vue---onMounted---')
    methods.loadData();
})


</script>

<template>

    <el-table :data="dataCollection.tableData" stripe style="width: 100%">
        <el-table-column prop="datetime" label="datetime" />
        <el-table-column prop="cloudcover" label="cloudcover" />
        <el-table-column prop="conditions" label="conditions" />
        <el-table-column prop="datetimeEpoch" label="datetimeEpoch" />
        <el-table-column prop="dew" label="dew" />
        <el-table-column prop="feelslike" label="feelslike" />
        <el-table-column prop="feelslikemax" label="feelslikemax" />
        <el-table-column prop="feelslikemin" label="feelslikemin" />
        <el-table-column prop="humidity" label="humidity" />
        <el-table-column prop="icon" label="icon" />
        <el-table-column prop="moonphase" label="moonphase" />
        <el-table-column prop="precip" label="precip" />
        <el-table-column prop="precipcover" label="precipcover" />
        <el-table-column prop="precipprob" label="precipprob" />
        <el-table-column prop="pressure" label="pressure" />
        <el-table-column prop="severerisk" label="severerisk" />
        <el-table-column prop="snow" label="snow" />
        <el-table-column prop="snowdepth" label="snowdepth" />
        <el-table-column prop="solarenergy" label="solarenergy" />
        <el-table-column prop="solarradiation" label="solarradiation" />
        <el-table-column prop="source" label="source" />
        <el-table-column prop="sunrise" label="sunrise" />
        <el-table-column prop="sunset" label="sunset" />
        <el-table-column prop="temp" label="temp" />
        <el-table-column prop="tempmax" label="tempmax" />
        <el-table-column prop="tempmin" label="tempmin" />
        <el-table-column prop="uvindex" label="uvindex" />
        <el-table-column prop="visibility" label="visibility" />
        <el-table-column prop="winddir" label="winddir" />
        <el-table-column prop="windgust" label="windgust" />
        <el-table-column prop="windspeed" label="windspeed" />
        <el-table-column prop="description" label="description" />
    </el-table>

</template>


<style scoped>

</style>
