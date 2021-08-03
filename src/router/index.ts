import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/pages/home/index.vue';

export const routes= [
    {
        path: '/',
        name: '首页',
        component: Home,
    },
    { path: '/1-Base', name: '1-Base', component: ()=>import('@/pages/1-base/index.vue') },
    { path: '/2-Shader', name: '2-Shader', component: ()=>import('@/pages/2-Shader/index.vue') },
    { path: '/3-Projects', name: '3-Projects', component: ()=>import('@/pages/3-Projects/index.vue') },
]

const history = createWebHistory();
const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.afterEach(() => {
    window.scrollTo(0,0);
})
export default router
