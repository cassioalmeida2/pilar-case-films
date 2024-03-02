<template>
	<div>
		<atom-card>
			<template #header>
				<atom-image :image="image" :key="id" :imageLazy="lazyImageDefault" />
			</template>
		</atom-card>
		<div class="text-body-1 font-weight-bold pt-2 text-primary"> {{title}} </div>
		<div class="text-body-2 text-grey-darken-1"> {{formatDateFull(date)}} </div>
	</div>
</template>

<script setup>
	import lazyImage from '@/assets/images/lazy-image.svg';
	import AtomCard from '@/components/atoms/AtomCard.vue'
	import AtomImage from '@/components/atoms/AtomImage.vue'
	import useDateUtils from '~/composables/dateUtils';

	const lazyImageDefault = lazyImage;
	const { formatDateFull } = useDateUtils();

	
	const props = defineProps({
		imageLazy: {
			type: String,
			required: true,
			default: '',
		},
		image: {
			type: String,
			required: true,
			default: '',
		},
		title: {
			type: String,
			required: true,
			default: '',
		},
		date: {
			type: String,
			required: true,
			default: '',
		}
	})
</script>