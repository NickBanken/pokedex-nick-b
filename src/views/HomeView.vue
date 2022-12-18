<script setup lang="ts">
import { onMounted } from "vue";

import FilterComponent from "@/components/home/FilterComponent.vue";
import InputComponentVue from "@/components/home/InputComponent.vue";
import ListComponent from "@/components/ui/ListComponent.vue";

import { usePokemonStore } from "@/stores/PokemonStore";
import FilterIcon from "@/assets/icons/filterIcon.vue";
import CardCounter from "@/components/ui/CardCounter.vue";
import PageLayout from "@/components/ui/PageLayout.vue";

const pokemonStore = usePokemonStore();

onMounted(() => {
  pokemonStore.fetchPokemons();
});
</script>

<template>
  <PageLayout :bg="'bg-app'">
    <nav>
      <button
        @click="pokemonStore.toggleOrder"
        title="filter"
        type="button"
        class="mt-5 ml-auto block p-2"
      >
        <filter-icon />
      </button>
      <h1 class="font-display text-[34px] font-bold text-dark">Pokédex</h1>
      <input-component-vue />
    </nav>

    <section class="mb-5 grid grid-cols-2 gap-2">
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

    <section class="mb-20">
      <!-- <list-component-vue class="mb-5" /> -->
      <ListComponent
        :pokemons="pokemonStore.getAllPokemons"
        :error="pokemonStore.error"
        :loading="pokemonStore.loading"
      />
    </section>
  </PageLayout>
  <transition name="fade">
    <filter-component
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
      v-if="pokemonStore.showOrder"
    />
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
