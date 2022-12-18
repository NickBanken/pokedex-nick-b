<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { PropType } from "vue";

import { useMotion } from "@vueuse/motion";

import { addCapitalFirstLetter } from "@/utils/utils";

import TypeLabel from "../ui/TypeLabel.vue";

import type Pokemon from "@/types/pokemon";
import chevronRight from "@/assets/icons/chevron-right.vue";

const { pokemon } = defineProps({
  pokemon: {
    required: true,
    type: Object as PropType<Pokemon>,
  },
  centered: {
    required: false,
    type: Boolean,
  },
});

const target = ref();

useMotion(target, {
  initial: {
    opacity: 0,
    y: 100,
  },
  visibleOnce: {
    opacity: 1,
    y: 0,
  },
});
</script>

<template>
  <li
    ref="target"
    :class="centered ? 'justify-self-start' : 'justify-self-center'"
    class="w-full"
  >
    <router-link
      :to="'/details/' + pokemon.id"
      class="flex items-center overflow-hidden rounded-xl bg-white p-[15px] shadow-card"
    >
      <img
        loading="lazy"
        class="-m-5 -ml-2 -mr-4 h-full"
        :src="pokemon.sprites['front_default']"
        :alt="'pokemon-' + pokemon.name"
      />

      <div class="ml-4">
        <h2 class="text-large font-bold">
          {{ addCapitalFirstLetter(pokemon.name) }}
        </h2>
        <p class="text-normal text-grey">
          Nr. {{ String(pokemon.id).padStart(3, "0") }}
        </p>
      </div>

      <type-label class="ml-auto justify-end" :pokemon="pokemon" />

      <chevronRight class="ml-2"></chevronRight>
    </router-link>
  </li>
</template>
