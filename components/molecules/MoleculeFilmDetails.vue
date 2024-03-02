<template>
	<v-row>
			<v-col cols="12" sm="12" md="4" lg="3">
				<div class="molecule-film-details__image" style="height:450px;" >
					<atom-image :image="content.poster_path" :imageLazy="lazyImageDefault" />
				</div>
			</v-col>
			<v-col cols="12" sm="12" md="8" lg="9">
				<h1 class="text-h4 font-weight-bold pt-2 text-primary"> {{content.title}} </h1>
				<div v-if="content?.release_date" class="text-body-2 text-grey-darken-1"> {{formatDateFull(content.release_date)}} </div>
				<div class="d-flex align-center my-6">
					<atom-circular-progress :value="content.vote_average" />
					<div class="ml-2 text-body-1 font-weight-bold"> Avaliação dos usuários </div>
				</div>
				<span class="my-4"> {{content.tagline}} </span>
				<span> {{content.overview}} </span>
			</v-col>
	</v-row>
</template>

<script setup>
	import lazyImage from '@/assets/images/lazy-image.svg';
	import AtomCard from '@/components/atoms/AtomCard.vue'
	import AtomImage from '@/components/atoms/AtomImage.vue'
	import AtomCircularProgress from '@/components/atoms/AtomCircularProgress.vue'
	import useDateUtils from '~/composables/dateUtils';

	const lazyImageDefault = lazyImage;
	const { formatDateFull } = useDateUtils();

	
	const props = defineProps({
		content: {
			type: Array,
			required: true,
			default: () => ([])
		}
	})
</script>

<style lang="scss" scoped>
	.molecule-film-details {
		&__image {
			height: 450px;
		}
	}
</style>