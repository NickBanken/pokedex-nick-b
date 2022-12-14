<script setup lang="ts">
import ButtonComponentVue from "../ui/SortButtonComponent.vue";
import roundClose from "@/assets/icons/roundClose.vue";
// import checkmark from "@/assets/icons/checkmark.vue";

import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();

const sortList = () => {
  pokemonStore.pokemons = pokemonStore.orderItems(pokemonStore.pokemons);
};
</script>

<template>
  <div>
    <div
      class="fixed bottom-0 z-10 flex max-h-screen w-full flex-col overflow-y-auto rounded-t-2xl bg-white px-5 font-display"
    >
      <div class="flex">
        <h2 class="py-4 text-lg font-bold">Sorteren op</h2>

        <button
          @click="pokemonStore.toggleOrder"
          class="ml-auto w-fit self-center rounded-full"
        >
          <round-close class="hover:fill-slate-400"></round-close>
        </button>
      </div>

      <div class="flex flex-col">
        <button-component-vue
          @click="pokemonStore.setOrder('ASC-AZ')"
          :icon="'src/assets/icons/az-down.svg'"
          :desc="'Alfabetisch oplopend'"
        />

        <button-component-vue
          @click="pokemonStore.setOrder('DESC-AZ')"
          :icon="'src/assets/icons/az-up.svg'"
          :desc="'Alfabetisch aflopend'"
        >
        </button-component-vue>

        <button-component-vue
          @click="pokemonStore.setOrder('ASC-NUM')"
          :icon="'src/assets/icons/num-up.svg'"
          :desc="'Numeriek oplopend'"
        >
        </button-component-vue>

        <button-component-vue
          @click="pokemonStore.setOrder('DESC-NUM')"
          :icon="'src/assets/icons/num-down.svg'"
          :desc="'Numeriek aflopend'"
        >
        </button-component-vue>

        <button
          @click="sortList"
          class="mt-5 mb-3 rounded-3xl bg-zinc-900 p-3 font-text text-lg text-white"
        >
          Toepassen
        </button>

        <div
          class="my-2 h-[5px] w-[143px] self-center rounded-2xl bg-zinc-900"
        ></div>
      </div>
    </div>

    <div
      @click="pokemonStore.toggleOrder"
      class="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-40"
    ></div>
  </div>
</template>
