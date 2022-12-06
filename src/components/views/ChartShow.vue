<script setup>
import BarChart from '../charts/BarChart.vue'
import PieChart from "../charts/PieChart.vue"
import ChartFilter from '../controls/ChartFilter.vue';
import { ref, onMounted, inject, reactive } from 'vue'

const dataCollection = reactive(
    {
        isDataLoaded: false,
        isChartIndexLoaded: false,
        chartIndexs: [],
        xAxisData: [],
        seriesData: [],
        pieData: [],
    });
const chartFilterExpose = ref()

const chartApi = inject("$chartApi");
const methods = {
    async getChartIndex() {
        console.log('ChartShow.getChartIndex');
        await chartApi.getChartIndex()
            .then((res) => {
                for (var i = 0; i < res.length; i++) {
                    dataCollection.chartIndexs.push(res[i])
                }
                dataCollection.isChartIndexLoaded = true
                console.log(dataCollection.chartIndexs)
            })
    },
    async onGetChartData() {
        let moduleCode = chartFilterExpose.value.dataCollection.moduleValue.moduleCode
        console.log(moduleCode)
        const params = { moduleCode: moduleCode }
        await chartApi.getChartData(params)
            .then((res) => {
                for (var i = 0; i < res.length; i++) {
                    dataCollection.xAxisData[i] = res[i].key
                    dataCollection.seriesData[i] = res[i].value
                    dataCollection.pieData[i] = { name: res[i].key, value: res[i].value }
                }
                dataCollection.isDataLoaded = true
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

    <el-row v-if="dataCollection.isChartIndexLoaded">
        <el-col :span="12">
            <ChartFilter class="chartFilter" ref="chartFilterExpose" :chartIndex="dataCollection.chartIndexs">
            </ChartFilter>
        </el-col>
        <el-col :span="2" class="primaryBtnRoot">
            <el-Button type="primary" class="primaryBtn" @click="methods.onGetChartData">确定</el-Button>
        </el-col>

    </el-row>

    <el-row :gutter="20" class="chartRow">
        <el-col :span="12">
            <BarChart class="barChart" v-if="dataCollection.isDataLoaded" :key="1" :xAxisData="dataCollection.xAxisData"
                :seriesData="dataCollection.seriesData"></BarChart>
        </el-col>
        <el-col :span="12">
            <PieChart class="pieChart" v-if="dataCollection.isDataLoaded" :key="2" :pieData="dataCollection.pieData">
            </PieChart>
        </el-col>
    </el-row>

</template>


<style scoped>
.chartFilter {
    width: 100%;
}

.primaryBtnRoot {
    display: flex;
}

.primaryBtn {
    width: 100%;
    margin: auto 0;
}

.chartRow {
    height: 60vh;
}
</style>
