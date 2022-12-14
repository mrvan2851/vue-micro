import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useLoadingStore } from '@/stores/loading'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach(async (to, from) => {
  let loadingStore = useLoadingStore()
  loadingStore.setRouterLoading(true)
  let next = true;
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;
    for (let i = 0; i < middleware.length; i++) {
      try {
        const result = await middleware[i]({ from, to });
        if (result !== true) {
          next = result;
          break;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  if (loadingStore.is_loading) {
    loadingStore.setLoading(false)
  }
  loadingStore.setRouterLoading(false)
  return next;
});
export default router
