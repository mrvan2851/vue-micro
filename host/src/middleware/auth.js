import { useAuthStore } from '@/stores/auth.js'
export default async function ({ from, to }) {
  let store = useAuthStore()
  let token = store.getLocalToken()
  if (token) {
    if (!store.isLogged) {
      try {
        let res = await store.fetchUser()
        let { success } = res;
        if (success) {
          console.log('success');
          return true
        } else {
          store.logout({ forceRedirect: false })
          return {
            name: 'Login'
          }
        }
      } catch (err) {
        if (err?.response?.status === 401) {
          store.logout({ forceRedirect: false })
          return {
            name: 'Login'
          }
        } else {
          store.setLoadingError(true)
          return false;
        }
      }
    } else {
      return true
    }
  }
  return {
    name: 'Login'
  }
}
