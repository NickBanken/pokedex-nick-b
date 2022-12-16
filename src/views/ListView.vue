<script setup lang="ts">
import { onBeforeMount, computed, defineProps, ref } from "vue";

import ListComponent from "@/components/ui/ListComponent.vue";
import Navigation from "@/components/ui/Navigation.vue";
import { usePokemonStore } from "@/stores/PokemonStore";
import { useRoute } from "vue-router";

import type singlePokemon from "@/types/singlePokemon";
import type { Ref } from "vue";

const pokemonStore = usePokemonStore();

let listedPokemon: Ref<singlePokemon[]> = ref([]);
let apikey: Ref<string> = ref<string>("");
let title: Ref<string> = ref<string>("");
let background: Ref<string> = ref<string>("");

const route = useRoute();

switch (route.params.mode) {
  case "favourites":
    apikey.value = pokemonStore.localKeyFavourite;
    title.value = "Favorieten";
    background.value = "bg-[#15D0DC]";
    break;
  case "team":
    apikey.value = pokemonStore.localKeyTeam;
    title.value = "Mijn team";
    background.value = "bg-[#7E32E0]";
}

onBeforeMount(() => {
  listedPokemon = pokemonStore.getLocalStorage(apikey.value);
});
</script>

<template>
  <main :class="background" class="flex flex-col h-screen px-5">
    <Navigation />
    <h2 class="mb-6 text-[34px] font-bold text-white">{{ title }}</h2>
    <ListComponent :pokemons="listedPokemon"></ListComponent>
  </main>
</template>
