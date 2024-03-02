<template>
  <div>
		<template-films-list :key="{componentKey}" :content="films" @loadMore="loadMore" @filmDetails="goToFilmDetails" />
	</div>
</template>

<script setup>
	import TemplateFilmsList from '@/components/templates/TemplateFilmsList.vue'
	import { useFilmsStore } from '/store/films.js'
	import { ref, onMounted } from 'vue'
	import { useRouter } from 'vue-router'

	const router = useRouter()
	const componentKey = ref(0);
	const films = ref([])
	const store = useFilmsStore()

	const forceUpdate = () => {
		componentKey += 1;
	}
	
	const fetchData = async () => {
		try {
			const currentPage = 1
			await store.fetchFilms(currentPage)
			films.value = store.films
		} catch (error) {
			console.error('Erro ao buscar dados:', error)
		}
	}

	const goToFilmDetails = async (filmId) => {
		try {
			router.push({path: '/film-details', query: {id: filmId}});
		} catch (error) {
			console.error('Erro ao buscar dados:', error)
		}
	}

	const loadMore = async () => {
		try {
			const currentPage = store.page + 1
			await store.fetchFilms(currentPage)
			films.value = store.films
			this.$nextTick(() => {
        forceUpdate;
      });
		} catch (error) {
			console.error('Erro ao buscar dados:', error)
		}
	}

	onMounted(() => {
		fetchData()
	})
</script>