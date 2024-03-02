<template>
	<ion-circular-progress class="atom-circular-progress" :value="value" :color="color" :rotate="360" :size="50" :width="width">
        <slot> 
            <span class="color-primary text-caption font-weight-bold">{{value}}%</span>
        </slot>
    </ion-circular-progress>
</template>

<script setup>
import IonCircularProgress from '@/components/ions/IonCircularProgress.vue'
	const props = defineProps({
		value: {
			type: Number,
			required: true,
			default: 0,
		},

		color: {
			type: String,
			required: true,
			default: 'primary',
		},

		width: {
			type: Number,
			required: true,
			default: 7,
		},
	})
</script>

<style lang="scss" scoped>
.atom-circular-progress {
    background: #ffffff;
    border-radius: 100%;
}
</style>