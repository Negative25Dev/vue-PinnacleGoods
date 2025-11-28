import { createRouter, createWebHistory } from 'vue-router'

import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import category from "@/views/Category/index.vue";
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home

        },
        {
          path: 'Categroy/:id',
          component: category

        },
        {
          path: 'category/sub/:id',

          component: SubCategory

        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: () => import("@/views/CartList/index.vue")
        },
        {
          path: 'checkout',
          component: () => import('@/views/checkout/index.vue')
        },
        {
          path: 'pay',
          component: () => import('@/views/Pay/index.vue')

        },
        {
          path: 'payback',
          component: () => import('@/views/Pay/PayBack.vue')

        },
        {
          path: 'member',
          component: () => import('@/views/Member/index.vue'),
          children: [
            {
              path: 'user',
              component: () => import('@/views/Member/components/Userinfo.vue')
            },
            {
              path: 'order',
              component: () => import('@/views/Member/components/UserOrder.vue')
            },

          ]

        }

      ]

    },
    {
      path: '/login',
      component: Login,

    },



  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
