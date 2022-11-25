<script setup>
import { onMounted, inject } from 'vue';
const props = defineProps({
    xAxisData: {
        type: Array,
        default: () => []
    },
    seriesData: {
        type: Array,
        default: () => []
    }
});

const echarts = inject("$echarts");

const methods = {
    async barChartInit() {
        var chart = echarts.init(document.getElementById('barMain'));
        let option = {
            xAxis: {
                type: 'category',
                data: props.xAxisData,
                axisLabel: {
                    interval: 0,
                    rotate: 40,
                }
            }, //X轴
            yAxis: { type: 'value' }, //Y轴
            series: [{ data: props.seriesData, type: 'bar' }],
        };
        chart.setOption(option);
    },

}

onMounted(() => {
    console.log('BarChart.vue---onMounted---')
    methods.barChartInit();
})

</script>

<template>
    <div id="barMain"></div>

</template>

<style scoped>

</style>