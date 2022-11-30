<template>
  <div class="app-1">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home 2</RouterLink>
          <RouterLink to="/about">About 2</RouterLink>
        </nav>
      </div>
    </header>

    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
