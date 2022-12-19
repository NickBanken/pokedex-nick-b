<script setup lang="ts">
defineProps(["error", "img"]);
</script>

<template>
  <div class="flex flex-col items-center mt-24">
    <div class="h-[200px] w-[200px]">
      <img loading="lazy" class="object-fill" v-if="img" :src="img" alt="" />
    </div>
    <h2 class="text-xl">{{ error }}</h2>
  </div>
</template>
