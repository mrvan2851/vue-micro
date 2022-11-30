import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'
export const useApp = {
  install(app, options = {}) {
    let { baseUrl = '/' } = options
    const router = createRouter({
      history: createWebHistory(baseUrl),
      routes
    })
    app.use(router)
  }
}