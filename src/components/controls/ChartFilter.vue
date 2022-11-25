<script setup>
import { ref, onMounted, inject, reactive } from 'vue'


const dataCollection = reactive(
    {
        softValue: {},
        moduleValue:  {},
        isDataLoaded: false,
    });

const props = defineProps({
    chartIndex: {
        type: Array,
        default: () => []
    },
});

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
        //console.log(dataCollection.moduleValue)
    }
}

onMounted(async () => {
    console.log('ChartFilter.vue---onMounted---')
    methods.chartFilterInit()
    //await methods.getChartData();

})

</script>

<template>
    <div class="content" v-if="dataCollection.isDataLoaded">
        <el-select v-model="dataCollection.softValue" class="m-0" placeholder="Select" size="large" value-key="softCode"
            @change="methods.onSoftChange">
            <el-option v-for="item in props.chartIndex" :key="item.softName" :label="item.softName" :value="item" />
        </el-select>

        <el-select v-model="dataCollection.moduleValue" class="m-1" placeholder="Select" size="large" value-key="moduleCode">
            <el-option v-for="item in dataCollection.softValue.modules" :key="item.moduleName" :label="item.moduleName"
                @change="methods.onModuleChange" :value="item" />
        </el-select>

        <!-- <el-select v-model="value" class="m-2" placeholder="Select" size="large">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select> -->

    </div>
</template>

<style scoped>
.content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
}

.m-0 {
    grid-column: 1;
}

.m-1 {
    grid-column: 2;
}

.m-2 {
    grid-column: 3;
}
</style>
