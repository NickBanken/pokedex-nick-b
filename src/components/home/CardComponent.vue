<script setup lang="ts">
import { defineProps, toRef } from "vue";
import type { PropType } from "vue";

import type Pokemon from "@/types/pokemon";

const props = defineProps({
  pokemon: {
    required: true,
    type: Object as PropType<Pokemon[]>,
  },
});
</script>

<template>
  <li class="flex items-center bg-white rounded-xl my-[5px] drop-shadow-lg">
    <div>
      <img class="p-1" :src="props.pokemon.sprites['front_default']" alt="" />
    </div>
    <div>
      <h2 class="text-bold">{{ props.pokemon.name }}</h2>
      <p>{{ String(props.pokemon.id).padStart(3, 0) }}</p>
    </div>
    <ul class="flex ml-auto text-[12px]">
      <li
        class="px-[10px] py-[3px] text-white bg-blue-500 rounded-xl ml-[5px]"
        :key="typeInfo"
        v-for="typeInfo in props.pokemon.types"
      >
        {{
          String(typeInfo.type.name).charAt(0).toUpperCase() +
          String(typeInfo.type.name).slice(1)
        }}
      </li>
    </ul>

    <img src="@/assets/icons/chevron-right.svg" alt="chevron-right" />
  </li>
</template>
