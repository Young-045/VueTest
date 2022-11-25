import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import chart from './api/chart';
import menu from './api/menu';
import * as echarts from 'echarts';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/router'

const app = createApp(App)

app.use(ElementPlus)
app.use(router);

app.provide('$echarts',echarts);
app.provide('$chart',chart);
app.provide('$menu',menu);

app.mount('#app')