<template>
  <div class="app-container">
    <transition name="fade-in" mode="out-in">
      <div class="app-container-wrapper" v-if="is_loading" key="is_loading" >
        loading
      </div>
      <div class="app-container-wrapper" v-else key="loaded">
        <VueExtendLayouts /> 
      </div>
    </transition>
  </div>
</template>
<script setup>
  import { computed, ref  } from "vue";
  import VueExtendLayouts from './components/vue-extend-layouts.vue'
  import { useLoadingStore } from './stores/loading'
  const loadingStore = useLoadingStore()
  const is_loading = computed(()=> loadingStore.is_loading)
</script>

<style lang="scss" scoped>
  .app-container {
    
  }
</style>
