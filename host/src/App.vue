<template>
  <div class="app-container">
    <VueExtendLayouts /> 
  </div>
</template>
<script setup>
  import { RouterLink, RouterView , useRoute } from "vue-router";
  import { defineAsyncComponent  } from "vue";
  import VueExtendLayouts from './components/vue-extend-layouts.vue'
  import Navbar from './components/Navbar.vue'
  import { useLoadingStore } from './stores/loading'
  const loadingStore = useLoadingStore()
  let router = useRoute()

</script>

<style lang="scss" scoped>
  .app-container {
  }
</style>
