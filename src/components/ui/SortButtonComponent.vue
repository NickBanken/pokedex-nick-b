<script setup lang="ts">
import checkmark from "@/assets/icons/checkmark.vue";
import { usePokemonStore } from "@/stores/PokemonStore";

const pokemonStore = usePokemonStore();
const { desc, value } = defineProps(["desc", "value"]);
</script>

<template>
  <label>
    <input
      :checked="value === pokemonStore.currentOrder"
      type="radio"
      name="option"
      :id="desc"
      :value="value"
      class="peer hidden"
    />
    <div
      class="my-[5.5px] flex items-center rounded-xl bg-light-grey px-3 py-2 hover:outline hover:outline-1 hover:outline-emerald-500 peer-checked:outline peer-checked:outline-1 peer-checked:outline-emerald-500"
    >
      <slot name="icon"></slot>
      <p class="ml-2">{{ desc }}</p>
      <checkmark
        v-if="value === pokemonStore.currentOrder"
        class="ml-auto"
      ></checkmark>
    </div>
  </label>
</template>
