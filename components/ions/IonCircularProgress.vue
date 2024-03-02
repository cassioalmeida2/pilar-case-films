<template>
    <v-progress-circular :model-value="value" v-bind="attrs" v-on="listeners">
        <slot />
    </v-progress-circular>
</template>

<script setup>
	const props = defineProps({
		value: {
			type: Number,
			required: true,
			default: 0,
		},
	})
</script>
