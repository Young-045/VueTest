<script setup>
import { onMounted, inject, watch } from 'vue';
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

watch(props, (newProps) => {
    methods.RefreshData()
});

const echarts = inject("$echarts");
let barChart;

const methods = {
    async barChartInit() {
        barChart = echarts.init(document.getElementById('barMain'));
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
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c}"//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
            },
        };
        barChart.setOption(option);
    },
    RefreshData() {
        var option = barChart.getOption();
        option.series[0].data = props.seriesData;
        option.xAxis[0  ].data = props.xAxisData;
        barChart.setOption(option);
        console.log('BarChartRefreshData')
    },
}

onMounted(() => {
    console.log('BarChart.vue---onMounted---')
    methods.barChartInit();
})

</script>

<template>
    <div id="barMain" class="barClass"></div>

</template>

<style scoped>
.barClass {
    width: 100%;
    height: 100%;
}
</style>