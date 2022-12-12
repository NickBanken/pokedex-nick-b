<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import CardComponentVue from "./CardComponent.vue";

import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();

const { pokemons } = storeToRefs(pokemonStore);

onMounted(() => {
  pokemonStore.getPokemons();
});
</script>

<template>
  <ul v-if="pokemons" class="flex flex-col">
    <CardComponentVue
      :key="pokemon.name"
      :pokemon="pokemon"
      v-for="pokemon in pokemons"
    >
    </CardComponentVue>
  </ul>
</template>
