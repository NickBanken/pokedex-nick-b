<script setup lang="ts">
import { watch } from "vue";

import FilterComponent from "@/components/home/FilterComponent.vue";
import InputComponentVue from "@/components/home/InputComponent.vue";
import ListComponentVue from "@/components/home/ListComponent.vue";

import { favouriteKey } from "@/utils/localStorage";

import { storeToRefs } from "pinia";
import { usePokemonStore } from "@/stores/PokemonStore";
import FilterIcon from "@/assets/icons/filterIcon.vue";
import CardCounter from "@/components/ui/CardCounter.vue";
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

    <section class="grid grid-cols-2 gap-2 mb-5">
      <CardCounter
        :title="'Mijn team'"
        :localKey="'team-pokedex-nick'"
        :color="'bg-[#7E32E0]'"
      ></CardCounter>
      <router-link to="/favourite">
        <CardCounter
          :title="'Favorieten'"
          :localKey="favouriteKey"
          :color="'bg-[#65CB9A]'"
        ></CardCounter>
      </router-link>
    </section>

    <section>
      <list-component-vue class="mb-5" />
    </section>
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
