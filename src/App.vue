<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMoviesStore } from './store/MoviesStore';
useMoviesStore();
</script>

<template>
  <header>
      <nav class="navigation">
        <RouterLink 
          to="/"
          class="navlink">
            Home
        </RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.navigation {
  width: 100%;
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  padding: 30px;
}
.navlink {
  text-decoration: none;
  font-weight: 700;
  color: black;
}
.navigation a.router-link-exact-active {
  color: grey;
  box-shadow: 0 10px 10px -5px;
}
</style>
