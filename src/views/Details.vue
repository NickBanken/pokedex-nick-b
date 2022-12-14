<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import type SinglePokemon from "@/types/singlePokemon";

import { usePokemonStore } from "@/stores/PokemonStore";

const route = useRoute();
const pokemonStore = usePokemonStore();

const { singlePokemon } = storeToRefs(pokemonStore);

onMounted(() => {
  pokemonStore.singlePokemon = pokemonStore.fetchSinglePokemon(
    route.params.id as string
  );

  const getSinglePokemon = computed(() => {
    return pokemonStore.getSinglePokemon;
  });
});
</script>

<template>
  <div v-show="singlePokemon">
    <p>{{ getSinglePokemon }}</p>
    <!-- <h1>{{ singlePokemon.name }}</h1>
    <p>{{ singlePokemon["base_experience"] }}</p>
    <p>{{ pokemonStore.singlePokemon }}</p> -->
    <!-- <img
      :src="singlePokemon.sprites.other['official-artwork'].front_default"
      alt=""
    /> -->
  </div>
</template>
