<template>
  <nav class="app-navbar">
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="env.MODULE_PRODUCT_MANAGEMENT_PATH">App1</RouterLink>
      </li>
      <li>
        <RouterLink :to="env.MODULE_ORDER_MANAGEMENT_PATH">App2</RouterLink>
      </li>
      <li>
        {{ counterStore.count }}
      </li>
      <li>
        <button @click="counterStore.increment">
          increase
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import env from "../config/env";
  import { useCounterStore } from "../stores/counter";
  const counterStore = useCounterStore();
</script>

<style lang="scss" scoped>
  .app-navbar {
    z-index: 1000;
    height: 50px;
    background: #cccccc;
    ul {
      display: flex;
      list-style-type: none;
      li {
        margin-left: 15px;
      }
    }
  }
</style>
