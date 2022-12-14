<script setup lang="ts">
import { onMounted, onBeforeMount, computed } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import heart from "@/assets/icons/heart.vue";
import chevronLeft from "@/assets/icons/chevron-left.vue";

import DetailPanel from "@/components/ui/DetailPanel.vue";
import DetailComponent from "@/components/details/DetailComponent.vue";

import type SinglePokemon from "@/types/singlePokemon";

import { usePokemonStore } from "@/stores/PokemonStore";

const route = useRoute();
const pokemonStore = usePokemonStore();

const { singlePokemon } = storeToRefs(pokemonStore);

onBeforeMount(() => {
  pokemonStore.singlePokemon = pokemonStore.fetchSinglePokemon(
    route.params.id as string
  );
});

const getSinglePokemon = computed(() => {
  return pokemonStore.getSinglePokemon;
});
</script>

<template>
  <main
    v-show="singlePokemon"
    class="p[0.5px] m-0 flex min-h-screen flex-col bg-green-400 px-5 font-display"
  >
    <nav class="flex justify-between mt-5">
      <router-link
        class="flex font-light tracking-wider text-white font-text"
        to="/"
      >
        <chevronLeft class="mr-1" /> Terug</router-link
      >
      <button>
        <heart />
      </button>
    </nav>

    <h2 class="mb-8 text-[34px] font-bold text-white">
      {{ getSinglePokemon.name }}
    </h2>

    <div>
      <img
        :src="getSinglePokemon.sprites?.other['official-artwork'].front_default"
        alt=""
        class="block m-auto mb-10 w-60"
      />
    </div>

    <DetailPanel>
      <template v-slot:title>About</template>
      <template v-slot:content>
        <DetailComponent />
      </template>
    </DetailPanel>
  </main>
</template>
