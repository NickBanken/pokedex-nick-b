<script setup lang="ts">
import { onBeforeMount, computed, defineProps, ref } from "vue";

import AllListComponent from "@/components/ui/AllListComponent.vue";
import Navigation from "@/components/ui/Navigation.vue";
import { usePokemonStore } from "@/stores/PokemonStore";

import type singlePokemon from "@/types/singlePokemon";
import type { Ref } from "vue";

const pokemonStore = usePokemonStore();

let listedPokemon: Ref<singlePokemon[]> = ref([]);
let apikey: Ref<String | undefined> = ref<String | undefined>();

onBeforeMount(() => {
  listedPokemon = pokemonStore.getLocalStorage("favourite-pokedex-wisemen");
});
</script>

<template>
  <main class="flex h-screen flex-col bg-[#15D0DC] px-5">
    <Navigation />
    <h2 class="mb-6 text-[34px] font-bold text-white">Favorieten</h2>
    <AllListComponent :pokemons="listedPokemon"></AllListComponent>
  </main>
</template>
