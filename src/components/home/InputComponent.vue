<script setup lang="ts">
import { ref } from "vue";
import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();

const searchInput = ref("");
</script>

<template>
  <div
    class="mt-[14px] mb-[19px] flex rounded-xl bg-light-grey py-[7px] px-[8px] text-large text-dark-grey"
  >
    <img
      alt="magnifying-glass"
      class="mr-[6px]"
      src="@/assets/icons/magnifying-glass.svg"
    />
    <input
      @input="pokemonStore.searchPokemons(searchInput)"
      v-model="searchInput"
      type="text"
      class="w-full bg-transparent font-text placeholder-dark-grey focus-visible:outline-none"
      placeholder="Pokemon zoeken"
    />
  </div>
</template>
