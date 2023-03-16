import axios from 'axios'
import { defineStore } from 'pinia'

export interface Movie {
  imdbID: string
  Title: string
  Year: string
  Type: string
  Poster: string
}

export interface DetailedMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  imdbRating: string
  imdbID: string
}

export const useMoviesStore = defineStore('MoviesStore', {
  state: () => ({
    movies: [] as Movie[],
    selectedMovie: {} as DetailedMovie,
    loading: false,
    currentPage: 1
  }),
  
  actions: {
    async getSearchedMovies(title: string, page: number) {
      this.loading = true
      const response = await axios.get(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=fbed68d4`)
      this.movies = response.data.Search
      this.currentPage = page
      console.log(this.currentPage, 'current')
      this.loading = false
    },

    async getSelectedMovie(id: string) {
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=fbed68d4`)
      this.selectedMovie = response.data
    }
  }
})
