<script setup lang="ts">
import { onBeforeMount, watch } from "vue";

import SortComponent from "@/components/home/SortComponent.vue";
import InputComponent from "@/components/home/InputComponent.vue";
import ListComponent from "@/components/ui/ListComponent.vue";

import { usePokemonStore } from "@/stores/PokemonStore";
import OrderIcon from "@/assets/icons/orderIcon.vue";
import CardCounter from "@/components/ui/CardCounter.vue";
import PageLayout from "@/components/ui/PageLayout.vue";

const pokemonStore = usePokemonStore();

onBeforeMount(() => {
  pokemonStore.fetchPokemons();
});

//disable the outer scroll when opening the ordermodal.
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
  <PageLayout :bg="'bg-app'">
    <nav>
      <button
        @click="pokemonStore.toggleOrder"
        title="filter"
        type="button"
        class="block p-2 mt-5 ml-auto"
      >
        <OrderIcon />
      </button>
      <h1 class="font-display text-[34px] font-bold text-dark">Pokédex</h1>
      <InputComponent />
    </nav>

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

    <section class="mb-20">
      <ListComponent
        :pokemons="pokemonStore.pokemons"
        :error="pokemonStore.error"
        :loading="pokemonStore.loading"
        :message="'Sorry, we konden geen pokemon vinden...'"
      />
    </section>
  </PageLayout>

  <SortComponent v-if="pokemonStore.showOrder" />
</template>
