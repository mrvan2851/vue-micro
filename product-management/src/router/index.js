const routes =  [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/product-home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/product-about.vue')
  }
]
export default routes
