<script setup>
import BarChart from '../charts/BarChart.vue'
import PieChart from "../charts/PieChart.vue"
import ChartFilter from '../controls/ChartFilter.vue';
import { ref, onMounted, inject, reactive } from 'vue'

const dataCollection = reactive(
    {
        isDataLoaded: false,
        isChartIndexLoaded: false,
        chartIndexs:[],
        xAxisData: [],
        seriesData: [],
        pieData: [],
    });

const chart = inject("$chart");
const methods = {
    async getChartData() {
        console.log('ChartShow.getChartData');
        await chart.getChartData()
            .then((res) => {
                for (var i = 0; i < res.length; i++) {
                    dataCollection.xAxisData.push(res[i].key)
                    dataCollection.seriesData.push(res[i].value)
                    dataCollection.pieData.push({ name: res[i].key, value: res[i].value })
                }
                dataCollection.isDataLoaded = true
            })
    },
    async getChartIndex() {
        console.log('ChartShow.getChartIndex');
        await chart.getChartIndex()
            .then((res) => {
                for (var i = 0; i < res.length; i++) {
                    dataCollection.chartIndexs.push(res[i])
                }
                dataCollection.isChartIndexLoaded = true
                console.log(dataCollection.chartIndexs)
            })
    },
}

onMounted(async () => {
    console.log('ChartShow.vue---onMounted---')
    await methods.getChartIndex();

    //await methods.getChartData();

})


</script>

<template>

    <div class="content">

        <ChartFilter class="chartFilter" v-if="dataCollection.isChartIndexLoaded" :chartIndex="dataCollection.chartIndexs"></ChartFilter>

        <BarChart class="barChart" v-if="dataCollection.isDataLoaded" :key="1" :xAxisData="dataCollection.xAxisData"
            :seriesData="dataCollection.seriesData"></BarChart>

        <PieChart class="pieChart" v-if="dataCollection.isDataLoaded" :key="2" :pieData="dataCollection.pieData">
        </PieChart>

    </div>


</template>


<style scoped>
.content {
    display: grid;
    margin-right: 50px;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px 600px;
    grid-gap: 50px;
}

.chartFilter {
    grid-row: 1;
    grid-column: 1/2;
}

.barChart {
    grid-row: 2;
    grid-column: 1;
}

.pieChart {
    grid-row: 2;
    grid-column: 2;
}
</style>
