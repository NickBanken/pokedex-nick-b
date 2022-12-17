<script setup lang="ts">
import { defineProps } from "vue";
import type { PropType } from "vue";

import { addCapitalFirstLetter } from "@/utils/utils";

import TypeLabel from "../ui/TypeLabel.vue";

import type Pokemon from "@/types/pokemon";

const { pokemon } = defineProps({
  pokemon: {
    required: true,
    type: Object as PropType<Pokemon>,
  },
});
</script>

<template>
  <li class="w-full max-w-[470px] justify-self-center">
    <router-link
      :to="'/details/' + pokemon.id"
      class="my-[5px] flex h-[70px] max-h-[70px] items-center overflow-hidden rounded-xl bg-white p-[15px] drop-shadow-lg"
    >
      <img
        loading="lazy"
        class="mx-2 h-full scale-[2]"
        :src="pokemon.sprites['front_default']"
        :alt="'pokemon-' + pokemon.name"
      />

      <div class="ml-4">
        <h2 class="font-bold text-large">
          {{ addCapitalFirstLetter(pokemon.name) }}
        </h2>
        <p class="text-normal text-grey">
          Nr. {{ String(pokemon.id).padStart(3, "0") }}
        </p>
      </div>

      <type-label class="ml-auto" :pokemon="pokemon" />

      <img src="@/assets/icons/chevron-right.svg" alt="chevron-right" />
    </router-link>
  </li>
</template>
