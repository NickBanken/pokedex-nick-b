<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { usePokemonStore } from "@/stores/PokemonStore";
import { storeToRefs } from "pinia";

import { onBeforeMount } from "vue";
import type singlePokemon from "@/types/singlePokemon";

const pokemonStore = usePokemonStore();
const { localKeyFavourite } = storeToRefs(pokemonStore);
let listedPokemon: Ref<singlePokemon[]> = ref([]);

onBeforeMount(async () => {
  listedPokemon = pokemonStore.getLocalStorage(localKeyFavourite.value);
});
</script>

<template>
  <ul v-for="pokemon in listedPokemon">
    {{
      pokemon.name
    }}
  </ul>
</template>
