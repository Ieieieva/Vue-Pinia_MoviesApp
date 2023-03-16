<script lang="ts">
import { useMoviesStore } from '@/store/MoviesStore';
import { computed } from 'vue';

export default {
  setup() {
    const store = useMoviesStore();
    const movie = computed(() => store.selectedMovie)

    return {
      movie,
    }
  }
}
</script>

<template>
  <main class="details__container">
    
    <h2 class="details__heading">
      {{ movie.Title }}
    </h2>
    <div class="movie__info">
      <div>
        <img :src="movie.Poster" class="movie__poster">
      </div>
      <div class="movie__details">
        <span class="movie__nums">
          <span>{{ movie.Year }}</span>
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          &#8226 
          <span>{{ movie.Runtime }}</span> 
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          &#8226 
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          <span>IMDB: &#x2B50 {{ movie.imdbRating }}/10</span>
        </span>
        <span class="movie__genre">
         {{ movie.Genre }}
        </span>
        <br>
        <div>
           <strong>Director: </strong>{{ movie.Director }}
           <br>
           <strong>Writen by: </strong>{{ movie.Writer }}
           <br>
           <strong>Cast: </strong>{{ movie.Actors }}
        </div>
        <br>
        <div>
          <p>
            {{ movie.Plot }}
          </p>
        </div>
        <br>
        <div>
          <span><strong>Awards: </strong>{{ movie.Awards }}</span>
          <br>
          <span><strong>Languages: </strong>{{ movie.Language }}</span>
          <br>
          <span><strong>Country: </strong>{{ movie.Country }}</span>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
.details__container {
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
}
.details__heading {
  font-size: 2rem;
  padding: 20px;
  text-shadow: 0px 3px 0px #abaaaa,
              0px 14px 10px rgba(0,0,0,0.15),
              0px 24px 2px rgba(0,0,0,0.1),
              0px 34px 30px rgba(0,0,0,0.1);
}
.movie__info {
  display: flex;
  gap: 30px;
}
.movie__details {
  display: flex;
  flex-direction: column;
}
.movie__poster {
  max-width: 300px;
  box-shadow: 5px 5px 10px;
}
.movie__nums {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  font-weight: 700;
}
.movie__genre {
  padding-left: 10px;
}
</style>