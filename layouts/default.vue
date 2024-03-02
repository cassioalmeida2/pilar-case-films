<template>
  <v-app id="inspire">
    <v-app-bar elevation="0" color="primary">
        <v-app-bar-title class="text-h6">TMDB Case</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>