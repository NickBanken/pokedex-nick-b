<script setup lang="ts">
import { def } from "@vue/shared";
import { defineProps } from "vue";

import Pokeball from "@/assets/icons/pokeball.vue";

import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();

const {} = defineProps(["title", "localKey", "color"]);
</script>

<template>
  <div :class="color" class="relative rounded-xl bg-[] p-3 font-text">
    <h2 class="mt-8 text-lg font-bold text-white">{{ title }}</h2>
    <p class="text-white opacity-50 text-md">
      {{ pokemonStore.countTotal(localKey) }} Pokemons
    </p>

    <Pokeball class="absolute right-0 -translate-y-1/2 inset-y-2/4" />
  </div>
</template>
