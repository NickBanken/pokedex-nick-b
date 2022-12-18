<script setup lang="ts">
import chevronLeft from "@/assets/icons/chevron-left.vue";
</script>

<template>
  <nav class="mt-5 flex justify-between">
    <a
      class="flex cursor-pointer font-text font-light tracking-wider text-white"
      @click="$router.go(-1)"
    >
      <chevronLeft class="mr-1" />
      Terug
    </a>

    <!--If the developer want's to add the favourite button-->
    <slot name="favourite"></slot>
  </nav>
</template>
