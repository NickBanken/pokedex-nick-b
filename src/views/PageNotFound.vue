<script setup lang="ts">
import Navigation from "@/components/ui/Navigation.vue";
import PageLayout from "@/components/ui/PageLayout.vue";
import pokeball from "@/assets/icons/pokeballLoader.vue";
</script>
<template>
  <PageLayout>
    <Navigation darkMode="true" />
    <div class="flex items-center justify-center text-[100px]">
      <h1>4</h1>
      <pokeball class="w-[100px]" />
      <h1>4</h1>
    </div>
    <h2 class="text-center text-3xl">Deze pagina kon niet gevonden worden.</h2>
  </PageLayout>
</template>
