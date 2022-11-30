<template>
  <div class="app-layout-default">
    <div class="app-layout-default-header">
      <AppLayoutNavbar />
    </div>
    <div class="app-layout-default-body">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import AppLayoutNavbar from './partials/app-layout-navbar.vue'
</script>

<style lang="scss" scoped>
.app-layout-default {
  &-header {
    height: 50px;
    background-color: #5b86e5;
    padding: 0 20px;
  }
  &-body{
    min-height: calc(100% - 50px);
    position: relative;
  }
}
</style>
