<template>
  <div ref="el"></div>
</template>

<script setup>
  //onUnmounted
  import { createApp, ref, onMounted, onUnmounted } from "vue";
  import { useApp, App } from "one-channel-product-management";
  import { pinia } from "@/main.js";
  const el = ref();
  const app = createApp(App);
  app.use(pinia);
  onMounted(() => {
    console.log('onMounted module product');
    app.use(useApp, {
      baseUrl : '/product-management'
    })
    app.mount(el.value);
  });
  onUnmounted(() => {
    app.unmount();
  });
</script>

<style lang="scss" scoped></style>
