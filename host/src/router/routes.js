import auth from '@/middleware/auth.js'
const groupAuth = [ auth ]
export const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      middleware: groupAuth
    },
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/product-management',
    component: () => import('@/modules/product/views/layout.vue'),
    children: [
      {
        path: '',
        name: 'App1',
        meta: {
          middleware: groupAuth
        },
        component: () => import('@/modules/product/views/index.vue'),
      },
      {
        path: ':pathMatch(.*)*',
        name: 'App1Fallback',
        meta: {
          middleware: groupAuth
        },
        component: () => import('@/modules/product/views/index.vue'),
      }
    ],
  },
  {
    path: '/order-management',
    name: 'App2',
    meta: {
      meta: {
        middleware: groupAuth
      },
    },
    component: () => import('../views/App2.vue')
  },
  {
    path: '/auth',
    component: () => import('@/modules/auth/views/layout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        meta: {
          layout: 'auth'
        },
        component: () => import('@/modules/auth/views/login.vue'),
      },

    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/modules/error/views/not-found.vue'),
  }
]