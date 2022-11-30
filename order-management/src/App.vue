<template>
  <div class="app-1">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home 2</RouterLink>
          <RouterLink to="/about">About 2</RouterLink>
        </nav>
        {{ stores.counter }}
        <button @click="counter.increment">
          increase
        </button>
      </div>
    </header>

    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { inject , computed } from 'vue'
  const stores = inject('stores')
  let counter = stores.counter
</script>

<style lang="scss" scoped></style>
