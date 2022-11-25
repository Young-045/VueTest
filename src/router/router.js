//router文件夹下新建index.js文件
import { createRouter, createWebHistory } from 'vue-router'
import ChartShow from '../components/views/ChartShow.vue'

//注册路由
const routes = [
    {
        path: '/chartShow',
        name: 'chartShow',
        component: ChartShow
    },
   
];
const router = createRouter({
// createWebHashHistory()是使用hash模式路由
// createWebHistory()是使用history模式路由
    history: createWebHistory(),
    routes
});

//全局守卫
// router.beforeEach((to,from,next)=>{
// 	next()
// })

// router.beforeResolve((to,from,next)=>{
// 	next()
// })

// router.afterEach((to,from)=>{
	
// })

export default router;
