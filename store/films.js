// store/index.js
import { defineStore } from 'pinia'

export const useFilmsStore = defineStore({
  id: 'films',

  state: () => ({
    films: [],
		page: 0,
		totalPages: 0,
		totalResults: 0,
    error: null
  }),

  actions: {
    async fetchFilms(pageIndex) {
			if(pageIndex == 1 || pageIndex > this.page && pageIndex <= this.totalPages){
				try {
					let response = await $fetch(`https://api.themoviedb.org/3/movie/popular?page=${pageIndex}&language=pt-BR&api_key=f740d51bcd90cbcc19eef79d91965f1e`)
					let urlMedia = 'https://media.themoviedb.org/t/p/w220_and_h330_face'
					response.results.forEach(film => {
						film.poster_path = urlMedia+film.poster_path
						film.vote_average = Math.ceil(film.vote_average*10)
					})
					this.films = [...this.films, ...response.results]
					this.page = response.page
					this.totalPages = response.total_pages
					this.totalResults = response.total_results 
					this.error = null
					return response
				} catch (error) {
					console.error('Erro ao buscar dados:', error)
					this.error = 'Erro ao buscar dados.'
					throw error
				}
    	}
			return true
    },
  }
})