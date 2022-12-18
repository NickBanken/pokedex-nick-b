<script setup lang="ts">
import { defineProps } from "vue";

const { desc } = defineProps(["icon", "desc"]);
</script>

<template>
  <button
    class="my-[5.5px] flex items-center rounded-xl bg-light-grey p-3 hover:outline hover:outline-1 hover:outline-emerald-500 focus:outline focus:outline-1 focus:outline-emerald-500"
  >
    <slot name="icon"></slot>
    <p class="ml-2">{{ desc }}</p>
  </button>
</template>
