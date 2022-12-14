<script setup lang="ts">
import { watch } from "vue";

import FilterComponent from "@/components/home/FilterComponent.vue";
import InputComponentVue from "@/components/home/InputComponent.vue";
import ListComponentVue from "@/components/home/ListComponent.vue";

import { storeToRefs } from "pinia";
import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();

const { showOrder } = storeToRefs(pokemonStore);

watch(
  () => pokemonStore.showOrder,
  (newVal: boolean, _) => {
    if (newVal) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }
);
</script>

<template>
  <main
    :class="pokemonStore.showOrder ? 'overflow-y-hidden' : ''"
    class="px-5 bg-app font-display"
  >
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
