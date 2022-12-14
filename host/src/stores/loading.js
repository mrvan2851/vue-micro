import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const is_loading = ref(false)
  const is_router_loading = ref(false)
  const is_loading_error = ref(false)
  const getLoading = computed(() => is_loading.value)
  const getRouterLoading = computed(() => is_router_loading.value)
  const getLoadingError = computed(() => is_loading_error.value)
  function setLoading(payload) {
    is_loading.value = payload
  }
  function setRouterLoading(payload) {
    is_router_loading.value = payload
  }
  function setLoadingError(payload) {
    is_loading_error.value = payload
  }
  return {
    is_loading, getLoading, setLoading,
    is_router_loading, getRouterLoading, setRouterLoading,
    is_loading_error, getLoadingError, setLoadingError
  }
})
