<script setup lang="ts">
import { watch, onBeforeMount } from "vue";

import FilterComponent from "@/components/home/FilterComponent.vue";
import InputComponentVue from "@/components/home/InputComponent.vue";
import ListComponent from "@/components/ui/ListComponent.vue";

import { storeToRefs } from "pinia";
import { usePokemonStore } from "@/stores/PokemonStore";
import FilterIcon from "@/assets/icons/filterIcon.vue";
import CardCounter from "@/components/ui/CardCounter.vue";
const pokemonStore = usePokemonStore();

const { showOrder } = storeToRefs(pokemonStore);

onBeforeMount(() => {
  pokemonStore.fetchPokemons();
});

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
    <div class="mx-auto w-full max-w-[900px]">
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
        <router-link :to="'/list/' + 'team'">
          <CardCounter
            :title="'Mijn team'"
            :mode="'team'"
            :color="'bg-[#7E32E0]'"
          ></CardCounter>
        </router-link>

        <router-link :to="'/list/' + 'favourites'">
          <CardCounter
            :title="'Favorieten'"
            :mode="'favourite'"
            :color="'bg-[#65CB9A]'"
          ></CardCounter>
        </router-link>
      </section>

      <section>
        <!-- <list-component-vue class="mb-5" /> -->
        <ListComponent :pokemons="pokemonStore.getAllPokemons" />
      </section>
    </div>
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
