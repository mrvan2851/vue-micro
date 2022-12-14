import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import env from '@/config/env.js'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { useRoute } from 'vue-router'
import { useApi } from '@/http/auth.js'
export const useAuthStore = defineStore('auth', () => {
  const api = useApi()
  const token_name = env.TOKEN_NAME
  const user = ref(null)
  const token = ref('')
  const storage = useLocalStorage()
  const local_token = storage.get(token_name)
  if (local_token) {
    token.value = local_token
  }
  const isLogged = ref(false)
  const getUser = computed(() => user.value)
  const getLogged = computed(() => isLogged.value)
  const getToken = computed(() => token.value)
  const getLocalToken = () => {
    return storage.get(token_name)
  }
  const setUser = (payload) => {
    user.value = payload
  }
  const setToken = (payload) => {
    token.value = payload
    if (payload) {
      storage.set(token_name, payload, {
        expires: 10
      })
    } else {
      storage.remove(token_name)
    }

  }
  const setLogged = (payload) => {
    isLogged.value = payload
  }
  const logout = ({ forceRedirect = true }) => {
    setToken('')
    setUser(null)
    setLogged(false)
    if (forceRedirect) {
      const route = useRoute()
      route.push({
        name: 'Login'
      })
    }
  }
  const fetchUser = async () => {
    try {
      let res = await api.fetchUser()
      let { data } = res
      setUser(data)
      setLogged(true)
      return res
    } catch (error) {
      throw error
    }
  }
  const login = async (payload) => {
    try {
      let res = await api.login(payload)
      let { data = {} } = res
      let { access_token = '' } = data
      setToken(access_token)
      setUser(data)
      setLogged(true)
      return res
    } catch (error) {
      throw error
    }
  }
  return {
    user, getUser, setUser, fetchUser,
    isLogged, getLogged, setLogged,
    token, getToken, getLocalToken, setToken,
    login, logout
  }
})
