<script setup lang="ts">
import { onBeforeMount, computed, defineProps, ref } from "vue";

import ListComponent from "@/components/ui/ListComponent.vue";
import Navigation from "@/components/ui/Navigation.vue";
import { usePokemonStore } from "@/stores/PokemonStore";
import { useRoute } from "vue-router";

import type singlePokemon from "@/types/singlePokemon";
import type { Ref } from "vue";
import PageLayout from "@/components/ui/PageLayout.vue";

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
  const pokemons = pokemonStore.getLocalStorage(apikey.value);
  if (pokemons != null) {
    listedPokemon = pokemons;
  }
});
</script>

<template>
  <PageLayout :bg="background">
    <Navigation />
    <h2 class="mb-6 text-[34px] font-bold text-white">{{ title }}</h2>
    <ListComponent
      v-if="listedPokemon"
      :pokemons="listedPokemon"
    ></ListComponent>
  </PageLayout>
</template>
