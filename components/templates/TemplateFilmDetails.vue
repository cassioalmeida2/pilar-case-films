<template>
	<div>
        <molecule-film-details :content="content" />
	</div>
</template>

<script setup>
	import MoleculeFilmDetails from '@/components/molecules/MoleculeFilmDetails.vue'

	const props = defineProps({
		content: {
			type: Array,
			required: true,
			default: () => ([])
		}
	})
</script>

<style lang="scss" scoped>

</style>