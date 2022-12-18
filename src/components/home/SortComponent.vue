<script setup lang="ts">
import ButtonComponent from "../ui/SortButtonComponent.vue";
import roundClose from "@/assets/icons/roundClose.vue";
import AzDown from "@/assets/icons/az-down.vue";
import AzUp from "@/assets/icons/az-up.vue";
import NumDown from "@/assets/icons/num-down.vue";
import NumUp from "@/assets/icons/num-up.vue";

import { usePokemonStore } from "@/stores/PokemonStore";
const pokemonStore = usePokemonStore();
</script>

<template>
  <div>
    <div
      class="fixed bottom-0 z-10 flex max-h-screen w-full flex-col overflow-y-auto rounded-t-2xl bg-white px-5 font-display"
    >
      <div class="mx-auto w-full max-w-[900px]">
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
          <ButtonComponent
            @click="pokemonStore.setOrder('ASC-AZ')"
            :desc="'Alfabetisch oplopend'"
            :value="'ASC-AZ'"
          >
            <template v-slot:icon>
              <AzDown></AzDown>
            </template>
          </ButtonComponent>

          <ButtonComponent
            @click="pokemonStore.setOrder('DESC-AZ')"
            :desc="'Alfabetisch aflopend'"
            :value="'DESC-AZ'"
          >
            <template v-slot:icon>
              <AzUp></AzUp>
            </template>
          </ButtonComponent>

          <ButtonComponent
            @click="pokemonStore.setOrder('ASC-NUM')"
            :desc="'Numeriek oplopend'"
            :value="'ASC-NUM'"
          >
            <template v-slot:icon>
              <NumDown></NumDown>
            </template>
          </ButtonComponent>

          <ButtonComponent
            @click="pokemonStore.setOrder('DESC-NUM')"
            :desc="'Numeriek aflopend'"
            :value="'DESC-NUM'"
          >
            <template v-slot:icon>
              <NumUp></NumUp>
            </template>
          </ButtonComponent>

          <button
            @click="pokemonStore.sortList"
            class="mt-5 mb-3 rounded-3xl bg-zinc-900 p-3 font-text text-lg text-white"
          >
            Toepassen
          </button>

          <div
            class="my-2 h-[5px] w-[143px] self-center rounded-2xl bg-zinc-900"
          ></div>
        </div>
      </div>
    </div>

    <div
      @click.once="pokemonStore.toggleOrder"
      class="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-40"
    ></div>
  </div>
</template>
