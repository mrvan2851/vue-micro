import { useRoute } from 'vue-router';

export const useRedirect = () => {
  const route = useRoute()
  const redirect = (payload) => {
    route.push(payload)
  }
  return {
    route,
    redirect
  }
}