<script setup lang="ts">
import checkmark from "@/assets/icons/checkmark.vue";
import { usePokemonStore } from "@/stores/PokemonStore";

const pokemonStore = usePokemonStore();
const { desc, value } = defineProps(["desc", "value"]);
</script>

<template>
  <button
    class="my-[5.5px] flex items-center rounded-xl bg-light-grey px-3 py-2 hover:outline hover:outline-1 hover:outline-emerald-500 focus:outline focus:outline-1 focus:outline-emerald-500"
  >
    <slot name="icon"></slot>
    <p class="ml-2">{{ desc }}</p>
    <checkmark
      v-if="value === pokemonStore.currentOrder"
      class="ml-auto"
    ></checkmark>
  </button>
</template>
