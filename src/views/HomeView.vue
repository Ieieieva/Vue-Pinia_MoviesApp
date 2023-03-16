<script lang="ts">
import MovieListVue from '@/components/MovieList.vue'

export default {
  components: { MovieListVue }
}
</script>

<template>
  <main class="home__container">
    <h1 class="home__title">Movies</h1>
    <MovieListVue class="home__movieList" />
  </main>
</template>

<style>
.home__container {
  width: 100%;
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home__title {
  text-align: center;
  font-size: 4rem;
  font-family: 'Righteous', cursive;
  color: white;
  text-shadow: 0 2px 1px #584f4b, 
    -1px 3px 1px #ad7575, 
    -2px 5px 1px #bf8080;
}
.home__movieList {
  align-self: flex-start;
}
</style>
