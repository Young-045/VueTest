<script setup>
import { onMounted, inject } from 'vue';
const props = defineProps({
    pieData: {
        type: Array,
        default: () => []
    },
});

const echarts = inject("$echarts");

const methods = {
    async pieChartInit() {
        var chart = echarts.init(document.getElementById('pieMain'));
        let option = {
            xAxis: { type: 'category', data: props.xAxisData }, //X轴
            yAxis: { type: 'value' }, //Y轴
            series: [
                {
                    radius: "60%",
                    data: props.pieData,
                    type: 'pie',
                    label: {
                        show: true,
                        position: "outer", //outside 外部显示  inside 内部显示
                        alignTo: "edge",
                        margin: 0,
                        edgeDistance:0,
                        formatter: function (param) {
                            let text = param.data.name;
                            if (text.length < 15) {
                                return text + '\n' + param.data.value + '(' + param.percent + '%)'
                            } else {
                                return text.substring(0, 15) + '...' + '\n' + param.data.value + '(' + param.percent + '%)'
                            }
                        },
                    }
                }],
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
            },
        };
        chart.setOption(option);
    },

}

onMounted(() => {
    console.log('PieChart.vue---onMounted---')
    methods.pieChartInit();
})

</script>

<template>
    <div id="pieMain"></div>
</template>

<style scoped>

</style>