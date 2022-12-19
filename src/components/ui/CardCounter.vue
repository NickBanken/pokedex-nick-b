<script setup lang="ts">
import Pokeball from "@/assets/icons/pokeball.vue";

import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();

defineProps(["title", "mode", "color"]);
</script>

<template>
  <div :class="color" class="relative p-3 rounded-xl font-text">
    <h2 class="mt-8 text-lg font-bold text-white">{{ title }}</h2>
    <p class="text-white opacity-50 text-md">
      {{ pokemonStore.countTotal(mode) }} Pokemons
    </p>

    <Pokeball class="absolute right-0 -translate-y-1/2 inset-y-2/4" />
  </div>
</template>
