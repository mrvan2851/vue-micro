export const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {

    },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/product-management',
    name: 'App1',
    meta: {

    },
    component: () => import('../views/App1.vue'),
  },
  {
    path: '/order-management',
    name: 'App2',
    meta: {

    },
    component: () => import('../views/App2.vue')
  }
]