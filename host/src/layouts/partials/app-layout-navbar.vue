<template>
  <div class="app-layout-navbar">
    <nav>
      <ul>
        <li v-for="item in navbar" :key="item.id">
          <RouterLink :to="{ name: item.name }">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const navbar = [
  {
    id: 'home',
    name: 'Home',
  },
  {
    id: 'app-1',
    name: 'App1',
  },
  {
    id: 'app-2',
    name: 'App2',
  }
]
</script>

<style lang="scss" scoped>
.app-layout-navbar {
  nav {
    ul {
      list-style-type: none;
      display: flex;

      li {
        a {
          display: inline-flex;
          height: 50px;
          align-items: center;
        }
      }
    }
  }
}
</style>