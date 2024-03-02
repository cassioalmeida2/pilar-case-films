<template>
  <div>
		<template-films-list :key="{componentKey}" :content="films" @loadMore="loadMore" />
	</div>
</template>

<script setup>
import TemplateFilmsList from '@/components/templates/TemplateFilmsList.vue'
import { useFilmsStore } from '/store/films.js'
import { ref, onMounted } from 'vue'
	const componentKey = ref(0);

	const forceUpdate = () => {
		componentKey += 1;
	}
	
	const films = ref([])
	
	const store = useFilmsStore()
	const fetchData = async () => {
		try {
			const currentPage = 1
			let data = await store.fetchFilms(currentPage)
			films.value = store.films
		} catch (error) {
			console.error('Erro ao buscar dados:', error)
		}
	}

	const loadMore = async () => {
		try {
			const currentPage = store.page + 1
			let data = await store.fetchFilms(currentPage)
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