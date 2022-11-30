<template>
  <div ref="el">
    <h1>App2</h1>
  </div>
</template>

<script setup>
  //import { useCreateApp } from "one-channel-order-management";
  import { ref, onMounted } from "vue";
  //import { useCounterStore } from '../stores/counter.js'
  const el = ref();
  onMounted(() => {
    //useCreateApp(el.value, {
    //  baseUrl: '/order-management',
    //  store: {
    //    counter : useCounterStore
    //  }
    //});
  });
</script>

<style lang="scss" scoped></style>
