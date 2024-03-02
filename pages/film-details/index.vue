<template>
  <div>
		<template-film-details :key="{componentKey}" :content="film" />
	</div>
</template>

<script setup>
	import TemplateFilmDetails from '@/components/templates/TemplateFilmDetails.vue'
	import { useFilmsStore } from '/store/films.js'
	import { ref, onMounted } from 'vue'
	import { useRoute } from 'vue-router'

	const route = useRoute()
	const componentKey = ref(0);
	const film = ref([])
	const store = useFilmsStore()

	const forceUpdate = () => {
		componentKey += 1;
	}
	
	const getFilmById = async (filmId) => {
		try {
			await store.getFilmById(filmId)
			film.value = store.currentFilm
		} catch (error) {
			console.error('Erro ao buscar dados:', error)
		}
	}

	onMounted(() => {
		const filmId = route.query.id
		getFilmById(filmId)
	})
</script>