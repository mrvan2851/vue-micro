<template>
  <div class="home">
    <h3>count : {{ counter.count }} ,</h3>
    <h3>double : {{ counter.doubleCount }}</h3>
    <button @click="counter.increment">increase</button>
  </div>
</template>

<script setup>
  import { useCounterStore } from 'host/src/stores/counter'
  let counter = useCounterStore()
</script>

<style lang="scss" scoped></style>
