<script setup lang="ts">
import ButtonComponentVue from "../ui/SortButtonComponent.vue";

import { storeToRefs } from "pinia";
import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();

// const { showOrder } = storeToRefs(pokemonStore);
</script>

<template>
  <div>
    <div
      class="fixed bottom-0 z-10 flex flex-col w-full px-5 bg-white rounded-t-2xl font-display"
    >
      <h2 class="py-4 text-lg font-bold">Sorteren op</h2>

      <div class="flex flex-col">
        <button-component-vue
          @click="pokemonStore.setOrder('ASC-AZ')"
          :icon="'src/assets/icons/az-down.svg'"
        >
          <template v-slot:desc>Alfabetisch oplopend</template>
        </button-component-vue>

        <button-component-vue
          @click="pokemonStore.setOrder('DESC-AZ')"
          :icon="'src/assets/icons/az-up.svg'"
        >
          <template v-slot:desc>Alfabetisch aflopend</template>
        </button-component-vue>

        <button-component-vue
          @click="pokemonStore.setOrder('ASC-NUM')"
          :icon="'src/assets/icons/num-up.svg'"
        >
          <template v-slot:desc>Numeriek oplopend</template>
        </button-component-vue>

        <button-component-vue
          @click="pokemonStore.setOrder('DESC-NUM')"
          :icon="'src/assets/icons/num-down.svg'"
        >
          <template v-slot:desc>Numeriek aflopend</template>
        </button-component-vue>

        <button
          @click="pokemonStore.orderPokemon()"
          class="p-3 mt-5 mb-3 text-lg text-white rounded-3xl bg-zinc-900 font-text"
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
