import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { default as instance } from "axios"
import env from '@/config/env.js'
import { useAuthStore } from '@/stores/auth.js'
export const useAxiosStore = defineStore('axios', () => {
  console.log('init  useAxiosStore');
  let { API_BASE_URL } = env
  
  let AxiosConfig = ref({
    baseURL: API_BASE_URL,
    timeout: 60 * 1000,
    validateStatus:
      function (status) {
        return status >= 200 && status < 400;
      },
  })

  let axios = instance.create(AxiosConfig.value)
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
  axios.interceptors.response.use(undefined, ()=>{
    if (error?.response?.status === 401) {
      const store = useAuthStore()
      store.logout({ forceRedirect: true })
    }
    return Promise.reject(error)
  });

  const exec = (payload) => {
    return new Promise((resolve, reject) => {
      console.log('exec axios : ');
      console.log(payload);
      axios(payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          if (axios.isCancel(err)) {
            return reject('canceled');
          }
          reject(err);
        })
    });
  }
  const createCancelToken = () => {
    const CancelToken = axios.CancelToken;
    return CancelToken.source();
  }
  const isCancel = (payload) => {
    return axios.isCancel(payload);
  }
  return {
    exec,
    createCancelToken,
    isCancel,
    get(payload = {}) {
      return exec({...payload, ...{ method : 'GET' }})
    },
    post(payload = {}) {
      return exec({...payload, ...{ method : 'POST' }})
    },
    put(payload = {}) {
      return exec({...payload, ...{ method : 'PUT' }})
    },
    delete(payload = {}) {
      return exec({...payload, ...{ method : 'DELETE' }})
    },

  }
})
