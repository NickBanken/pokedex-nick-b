<script setup lang="ts">
import pokeballLoader from "@/assets/icons/pokeballLoader.vue";
</script>

<template>
  <div
    class="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-1/2 flex-col items-center"
  >
    <pokeballLoader
      class="mb-5 h-[50px] w-[50px] animate-spin-slow"
    ></pokeballLoader>
    <p class="animate-bounce text-xl">Loading...</p>
  </div>
</template>
