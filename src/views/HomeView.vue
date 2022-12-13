<script setup lang="ts">
import FilterComponent from "@/components/home/FilterComponent.vue";
import InputComponentVue from "@/components/home/InputComponent.vue";
import ListComponentVue from "@/components/home/ListComponent.vue";

import { storeToRefs } from "pinia";
import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();

const { showOrder } = storeToRefs(pokemonStore);
</script>

<template>
  <main class="bg-app px-5 font-display">
    <h1 class="font-display text-[34px] font-bold text-dark">Pokédex</h1>
    <input-component-vue />
    <list-component-vue />
  </main>
  <transition name="fade">
    <filter-component v-if="showOrder" />
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
