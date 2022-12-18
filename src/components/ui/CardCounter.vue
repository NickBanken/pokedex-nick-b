<script setup lang="ts">
import { def } from "@vue/shared";
import { defineProps } from "vue";

import Pokeball from "@/assets/icons/pokeball.vue";

import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();

const {} = defineProps(["title", "mode", "color"]);
</script>

<template>
  <div :class="color" class="relative rounded-xl p-3 font-text">
    <h2 class="mt-8 text-lg font-bold text-white">{{ title }}</h2>
    <p class="text-md text-white opacity-50">
      {{ pokemonStore.countTotal(mode) }} Pokemons
    </p>

    <Pokeball class="absolute inset-y-2/4 right-0 -translate-y-1/2" />
  </div>
</template>
