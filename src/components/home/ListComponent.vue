<script setup lang="ts">
import { onMounted, computed } from "vue";
import { storeToRefs } from "pinia";

import CardComponentVue from "./CardComponent.vue";

import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();

const { pokemons } = storeToRefs(pokemonStore);

onMounted(() => {
  pokemonStore.getPokemons();
});

const pokemonHandler = computed(() => {
  return pokemons.value;
});
</script>

<template>
  <transition-group name="list" v-if="pokemons" class="flex flex-col" tag="ul">
    <card-component-vue
      :key="pokemon.name"
      :pokemon="pokemon"
      v-for="pokemon in pokemonHandler"
    />
  </transition-group>
  <h2 v-else>Sorry, we could not find any Pokemon with that value.</h2>
</template>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  /* transform: translateX(30px); */
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  opacity: 0;
  position: absolute;
}
</style>
