// 管理路由
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// 导入 layout
import layout from '@/views/layout/index.vue'
let router = createRouter({
    // 设置路由模式
    history: createWebHistory(),
    // 设置路由对象
    routes: [
        { path: '/', redirect: '/layout' },// 第一级路由 redirect 重定向路由
        {
            path: '/layout', component: layout,
            children: [
                {
                    path: '', component: () => import('@/views/home/index.vue'),
                    children: [
                        { path: 'home_one', component: () => import('@/views/home/components/home_one/index.vue') },
                    ]
                },

                {
                    path: 'display', component: () => import('@/views/display/index.vue'),
                    children: [
                        {
                            path: 'display_title', component: () => import('@/views/display/compoents/display_title/index.vue')
                        },
                        {
                            path: 'display_dh1', component: () => import('@/views/display/compoents/display_dh1/index.vue')
                        },
                        {
                            path: 'display_dh2', component: () => import('@/views/display/compoents/display_dh2/index.vue')
                        },
                    ]
                },
                {
                    path: 'listpay', component: () => import('@/views/listpay/index.vue'),
                    children: [
                        { path: 'listpay_one', component: () => import('@/views/listpay/components/listpay_one/index.vue') },
                        { path: 'listpay_two', component: () => import('@/views/listpay/components/listpay_two/index.vue') },
                    ]
                },
            ]
        },
    ]
})
// 暴露路由对象
export default router