<template>
    <ion-card class="mx-auto card" max-width="100%" color="white" elevation="0">
        <slot>
            <slot name="header" /> 
            <slot name="content" />
        </slot>
    </ion-card>
</template>

<script setup>
import IonCard from '@/components/ions/IonCard.vue'
</script>

<style lang='scss' scoped>
    .card {
        border-radius: 16px;
    }
</style>