<template>
	<ion-image :lazy-src="imageLazy" :key="`image-${id}`" :imageUrl="image" height="100%" content />
</template>

<script setup>
import IonImage from '@/components/ions/IonImage.vue'
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
		id: {
			type: Number,
			required: true,
			default: 0,
		}
	})
</script>