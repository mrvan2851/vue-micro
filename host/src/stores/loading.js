import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const is_loading = ref(0)
  const getLoading = computed(() => is_loading.value)
  function setLoading(payload) {
    is_loading.value = payload
  }
  return { getLoading, is_loading, setLoading }
})
