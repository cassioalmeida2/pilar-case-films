<template>
	<v-img :src="imageUrl" v-bind="attrs" v-on="listeners" />
</template>

<script setup>
	const props = defineProps({
		imageUrl: {
			type: String,
			required: true,
			default: '',
		},
	})
</script>
