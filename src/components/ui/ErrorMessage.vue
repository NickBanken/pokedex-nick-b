<script setup lang="ts">
import { defineProps } from "vue";
const { error } = defineProps(["error", "img"]);
</script>

<template>
  <div class="mt-24 flex flex-col items-center">
    <div class="h-[200px] w-[200px]">
      <img loading="lazy" class="object-fill" v-if="img" :src="img" alt="" />
    </div>
    <h2 class="text-xl">{{ error }}</h2>
  </div>
</template>
