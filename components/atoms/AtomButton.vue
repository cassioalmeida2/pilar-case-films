<template>
	<ion-button :color="color">
        <slot />
    </ion-button>
</template>

<script setup>
import IonButton from '@/components/ions/IonButton.vue'
	const props = defineProps({
		color: {
			type: String,
			required: true,
			default: 'primary',
		},
	})
</script>