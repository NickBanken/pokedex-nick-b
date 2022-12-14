<script setup lang="ts">
import { watch } from "vue";

import FilterComponent from "@/components/home/FilterComponent.vue";
import InputComponentVue from "@/components/home/InputComponent.vue";
import ListComponentVue from "@/components/home/ListComponent.vue";

import { storeToRefs } from "pinia";
import { usePokemonStore } from "@/stores/PokemonStore";
import FilterIcon from "@/assets/icons/filterIcon.vue";
const pokemonStore = usePokemonStore();

const { showOrder } = storeToRefs(pokemonStore);

watch(
  () => pokemonStore.showOrder,
  (newVal: boolean, _) => {
    if (newVal) {
      document.documentElement.style.overflowY = "scroll";
      document.documentElement.style.position = "fixed";
      document.documentElement.style.width = "100%";
    } else {
      document.documentElement.style.overflowY = "auto";
      document.documentElement.style.position = "static";
    }
  }
);
</script>

<template>
  <main
    :class="pokemonStore.showOrder ? 'overflow-y-hidden' : ''"
    class="p[0.5px] m-0 flex min-h-screen flex-col bg-app px-5 font-display"
  >
    <button
      @click="pokemonStore.toggleOrder"
      title="filter"
      type="button"
      class="p-2 mt-5 ml-auto"
    >
      <filter-icon />
    </button>
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
