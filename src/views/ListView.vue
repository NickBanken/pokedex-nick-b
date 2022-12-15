<script setup lang="ts">
import { usePokemonStore } from "@/stores/PokemonStore";
import { favouriteKey } from "@/utils/localStorage";

import { onBeforeMount, watch } from "vue";

const pokemonStore = usePokemonStore();

console.log(pokemonStore.getListedPokemons(favouriteKey));
console.log();

onBeforeMount(async () => {
  if (pokemonStore.pokemons.length === 0) {
    pokemonStore.getPokemons();
  }
});
</script>

<template>
  <p>lol</p>
</template>
