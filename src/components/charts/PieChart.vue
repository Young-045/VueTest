<script setup>
import { onMounted, inject, watch } from 'vue';
const props = defineProps({
    pieData: {
        type: Array,
        default: () => []
    },
});

const echarts = inject("$echarts");
let pieChart;

watch(props, (newProps) => {
    methods.RefreshData()
});

const methods = {
    async pieChartInit() {
        pieChart = echarts.init(document.getElementById('pieMain'));
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
                        edgeDistance: 0,
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
        pieChart.setOption(option);
    },
    RefreshData() {
        var option = pieChart.getOption();
        option.series[0].data = props.pieData;
        pieChart.setOption(option);
        console.log('PieChartRefreshData')
    },

}

onMounted(() => {
    console.log('PieChart.vue---onMounted---')
    methods.pieChartInit();
})

</script>

<template>
    <div id="pieMain" class="pieClass"></div>
</template>

<style scoped>
.pieClass {
    width: 100%;
    height: 100%;
}
</style>