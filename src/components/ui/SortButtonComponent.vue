<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps(["icon"]);
</script>

<template>
  <button
    class="my-[5.5px] flex items-center rounded-xl bg-light-grey p-3 hover:outline hover:outline-1 hover:outline-emerald-500 focus:outline focus:outline-1 focus:outline-emerald-500"
  >
    <img class="mr-2 inlin2" :src="icon" alt="num-down" />
    <slot name="desc"></slot>
  </button>
</template>
