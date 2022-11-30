<template>
  <component :is="currentLayout" />
</template>

<script setup>
import { ref, computed, defineAsyncComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps({
  layout: {
    type: String,
    default: 'default',
  },
  loading: {
    type: String,
    default: null,
  },
  prefix: {
    type: String,
    default: '',
  },
})
let layoutName = ref('default')

const route = useRoute()

const currentLayout = computed(() => {
  if (!layoutName.value) return 'div';
  return defineAsyncComponent(() => import(/* webpackChunkName: "layout-[request]" */ `@/layouts/${layoutName.value}.vue`));
})

watch(
  () => route,
  (route) => {
    console.log(route);
    const newLayout = route.meta.layout;
    if (!newLayout && !route.name) {
      layoutName.value = props.loading;
      return;
    }
    if (!newLayout) {
      layoutName.value = props.layout || 'default';
      return;
    }
    layoutName.value = newLayout;
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>

</style>