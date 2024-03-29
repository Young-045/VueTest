import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import chart from './api/chart';
import menu from './api/menu';
import weather from './api/weather';
import * as echarts from 'echarts';
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import router from './router/router'
import auth from './api/auth'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(router);

app.provide('$echarts',echarts);
app.provide('$chartApi',chart);
app.provide('$menuApi',menu);
app.provide('$weatherApi',weather);
app.provide('$authApi',auth);

app.mount('#app')