<template>
  <div class="home">
    {{ count }}
    <button @click="counter.increment">increase</button>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { useCounterStore } from "@/stores/counter";
  let counter = useCounterStore();
  let count = computed(()=>counter.count)
</script>

<style lang="scss" scoped></style>
