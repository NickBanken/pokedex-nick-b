<script setup lang="ts">
import { defineProps } from "vue";
import type { PropType } from "vue";

import type Pokemon from "@/types/pokemon";

import typeColors from "@/utils/typeColors";

const props = defineProps({
  pokemon: {
    required: true,
    type: Object as PropType<Pokemon>,
  },
});

const addCapitalFirstLetter = (string: string) => {
  return String(string).charAt(0).toUpperCase() + String(string).slice(1);
};
</script>

<template>
  <li
    class="my-[5px] flex h-[70px] max-h-[70px] items-center overflow-hidden rounded-xl bg-white p-[15px] drop-shadow-lg"
  >
    <img
      class="mx-2 h-full scale-[2]"
      :src="props.pokemon.sprites['front_default']"
      :alt="'pokemon-' + props.pokemon.name"
    />

    <div class="ml-4">
      <h2 class="text-large font-bold">
        {{ addCapitalFirstLetter(props.pokemon.name) }}
      </h2>
      <p class="text-normal text-grey">
        Nr. {{ String(props.pokemon.id).padStart(3, "0") }}
      </p>
    </div>
    <ul class="ml-auto flex self-start text-[12px]">
      <li
      :class="typeColors[typeInfo.type.name]"
        class="ml-[5px] rounded-xl px-[10px] py-[3px] text-white"
        
        v-for="typeInfo in props.pokemon.types"
        :key="typeInfo.slot"
      >
        {{ addCapitalFirstLetter(typeInfo.type.name) }}
      </li>
    </ul>

    <img src="@/assets/icons/chevron-right.svg" alt="chevron-right" />
  </li>
</template>
