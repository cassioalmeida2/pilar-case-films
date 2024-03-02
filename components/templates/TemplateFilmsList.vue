<template>
	<div>
		<h1 class="text-h5 text-primary mb-4"> Filmes Populares </h1>
		<v-row class="mb-15">
			<v-col cols="6" sm="4" md="3" lg="2" xl="1" v-for="(film, index) in content" :key="index">
				<molecule-film-card :imageLazy="film.poster_path" :image="film.poster_path" :title="film.title" :date="film.release_date" :voteAverage="film.vote_average" />
			</v-col>
		</v-row>
		<div class="text-right mt-5 template-films-list__load-more">
			<atom-button @click="loadMore">Ver mais</atom-button>
		</div>
	</div>
</template>

<script setup>
	import MoleculeFilmCard from '@/components/molecules/MoleculeFilmCard.vue'
	import AtomButton from '@/components/atoms/AtomButton.vue'
	import { defineEmits } from 'vue'
	
	const emit = defineEmits(['loadMore'])

	const props = defineProps({
		content: {
			type: Array,
			required: true,
			default: () => ([])
		}
	})

	const loadMore = () => {
		emit('loadMore')
	}
</script>

<style lang="scss" scoped>
.template-films-list {
	&__load-more {
		position: absolute;
		bottom: 20px;
		right: 20px;
	}
}
</style>