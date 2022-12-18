<script setup lang="ts">
import { defineProps } from "vue";
import typeColors from "@/utils/typeColors";

const { pokemon } = defineProps(["pokemon"]);

const addCapitalFirstLetter = (string: string) => {
  return String(string).charAt(0).toUpperCase() + String(string).slice(1);
};
</script>

<template>
  <ul class="flex flex-wrap gap-1 text-[12px]">
    <li
      :class="typeColors[typeInfo.type.name as keyof {}]"
      class="rounded-xl px-[10px] py-[3px] text-white"
      v-for="typeInfo in pokemon.types"
      :key="typeInfo.slot"
    >
      {{ addCapitalFirstLetter(typeInfo.type.name) }}
    </li>
  </ul>
</template>
