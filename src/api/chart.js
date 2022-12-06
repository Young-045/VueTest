import { Get, Post, Put, Patch, Delete } from "@/api/request";

export default {
  getChartData: (moduleCode) => {
    console.log('chart.js调用GetChartData')
    return Get('/Chart/GetChartData', moduleCode);
  },
  getChartIndex: (params) => {
    console.log('chart.js调用GetChartIndex')
    return Get('/Chart/GetChartIndex', params);
  },


}
