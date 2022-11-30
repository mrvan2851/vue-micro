<template>
  <div class="home">
    <h1>count : {{ counter.count }} ,</h1>
    <h1>double : {{ counter.doubleCount }}</h1>
    <button @click="counter.increment">increase</button>

    <div>
      <demo />
    </div>
  </div>
</template>

<script setup>
  import demo from '../components/demo.vue'
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from 'host/src/stores/counter'
  let counter = useCounterStore()
  
</script>

<style lang="scss" scoped></style>
