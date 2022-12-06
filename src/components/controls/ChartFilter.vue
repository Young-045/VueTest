<script setup>
import { ref, onMounted, inject, reactive } from 'vue'


const dataCollection = reactive(
    {
        softValue: {},
        moduleValue: {},
        isDataLoaded: false,
    });

const props = defineProps({
    chartIndex: {
        type: Array,
        default: () => []
    },
});

defineExpose({ dataCollection })

const methods = {
    chartFilterInit() {
        console.log(props.chartIndex[0])
        dataCollection.softValue = props.chartIndex[0]
        dataCollection.moduleValue = props.chartIndex[0].modules[0]
        dataCollection.isDataLoaded = true
    },

    onSoftChange(item) {
        console.log(dataCollection.softValue)
        dataCollection.moduleValue = item.modules[0]
        console.log(dataCollection.moduleValue)
    },

    onModuleChange(item) {
        console.log(dataCollection.moduleValue)
    }
}

onMounted(async () => {
    console.log('ChartFilter.vue---onMounted---')
    methods.chartFilterInit()
    //await methods.getChartData();

})

</script>

<template>

    <el-row v-if="dataCollection.isDataLoaded" :gutter="20">
        <el-col :span="12">
            <el-select v-model="dataCollection.softValue" class="m-0" placeholder="Select" size="large"
                value-key="softCode" @change="methods.onSoftChange">
                <el-option v-for="item in props.chartIndex" :key="item.softName" :label="item.softName" :value="item" />
            </el-select>
        </el-col>
        <el-col :span="12">
            <el-select v-model="dataCollection.moduleValue" class="m-1" placeholder="Select" size="large"
                value-key="moduleCode">
                <el-option v-for="item in dataCollection.softValue.modules" :key="item.moduleName"
                    :label="item.moduleName" @change="methods.onModuleChange" :value="item" />
            </el-select>
        </el-col>
    </el-row>

</template>

<style scoped>
.m-0 {
    width: 100%;
}

.m-1 {
    width: 100%;
}
</style>
