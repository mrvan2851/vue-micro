import { default as instance } from "axios"
import env from '@/config/env.js'
import { useAuthStore } from '@/stores/auth.js'
let { API_BASE_URL } = env
let AxiosConfig = {
  baseURL: API_BASE_URL,
  timeout: 60 * 1000,
  validateStatus:
    function (status) {
      return status >= 200 && status < 400;
    },
}

let axios = instance.create(AxiosConfig)
axios.CancelToken = instance.CancelToken
axios.isCancel = instance.isCancel
axios.interceptors.request.use(function (config) {
  const store = useAuthStore()
  const token = store.getLocalToken()
  if (token) {
    config.headers["Authorization"] = config.headers["Authorization"] || 'Bearer ' + token
  }
  return config
})

axios.interceptors.response.use(
  function (res) {
    if (res?.status === 401) {
      const store = useAuthStore()
      store.logout({ forceRedirect : true })
    }
    return res
  },
  function (error) {
    if (error?.response?.status === 401) {
      const store = useAuthStore()
      store.logout({ forceRedirect : true })
    }
    return Promise.reject(error)
  },
)

export default axios
