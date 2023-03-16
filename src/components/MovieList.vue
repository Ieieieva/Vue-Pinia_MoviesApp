<script lang="ts">
import router from '@/router';
import { useMoviesStore } from '@/store/MoviesStore'
import { computed, ref } from 'vue'
import TheLoadingVue from './TheLoading.vue'

export default {
  setup() {
    const store = useMoviesStore();
    const title = ref("");

    const onSearchMovie = () => {
      store.getSearchedMovies(title.value, store.currentPage);
      title.value = "";
    }
    
    const onSelectMovie = (id: string) => {
      store.getSelectedMovie(id);
      router.push(`/movie/${id}`)
    }

    const onSubmit = (e: any) => {
      e.preventDefault();
      onSearchMovie()
    }

    const movies = computed(() => store.movies);
    const selectedMovie = computed(() => store.selectedMovie);
    const loading = computed(() => store.loading);
    const currentPage = computed(() => store.currentPage)

    return {
      movies,
      selectedMovie,
      loading,
      title,
      onSearchMovie,
      onSelectMovie,
      onSubmit,
      currentPage,
    };
  },
  components: { TheLoadingVue }
}
</script>

<template>
  <main class="movielist__container">

    <form class="search__form" @submit.prevent="onSubmit">
      <input 
        v-model="title" 
        type="search" 
        placeholder="Enter movie title..." 
        class="search__input" 
      />
    </form>

    <div v-if="loading">
      <TheLoadingVue />
    </div> 
    <div v-else class="allcards__container">
      <div
        @click="onSelectMovie(movie.imdbID)"
        class="card__container" 
        v-for="movie in movies" 
        :key="movie.imdbID"
      >
        <img :src="movie.Poster" class="card__image" />
        <div class="card__info">
          <h4 class="card__heading">{{ movie.Title }}</h4>
          <span class="card__year">{{ movie.Year }}</span>
        </div>
      </div>
      
    </div>

  </main>
</template>

<style scoped>
.movielist__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.search__form {
  display: flex;
  gap: 10px;
  align-items: center;
}
.search__input {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-family: 'Gochi Hand', cursive;
  font-size: 1.3rem;
}
.search__button {
  padding: 10px;
  cursor: pointer;
  font-size: 2rem;
}
.allcards__container {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  gap: 20px;
}
.card__container {
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(80, 80, 80, 0.8);
  color: black;
  box-shadow: 5px 5px 10px;
  text-decoration: none;
  border-radius: 5px;
  overflow: hidden;
}
.card__container:hover {
  opacity: 0.8;
}
.card__image {
  box-shadow: 0 10px 10px -5px;
}
.card__info {
  padding: 10px;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
}
.card__heading {
  padding: 15px;
  font-size: 1.15rem;
  color: white;
}
.card__year {
  padding: 10px;
  color: rgb(147, 143, 143);
}
</style>
