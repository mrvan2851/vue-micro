import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import routes from './router'

const useCreateApp =  (el , options ) => {
  const { baseUrl  = '/'  , store = { }} = options 
  const router = createRouter({
    history: createWebHistory(baseUrl),
    routes
  })
  let app = createApp(App).use(createPinia()).use(router)
  let stores = {}
  for (const key in store) {
    let item = store[key]
    stores[key] = item()
  }
  app.provide('stores', stores)
  app.mount(el)
}
useCreateApp(document.querySelector('#app'), { base_url : '/'})
export default useCreateApp