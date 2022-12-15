<script setup lang="ts">
import chevronLeft from "@/assets/icons/chevron-left.vue";
</script>

<template>
  <nav class="flex justify-between mt-5">
    <router-link
      class="flex font-light tracking-wider text-white font-text"
      to="/"
    >
      <chevronLeft class="mr-1" />
      Terug
    </router-link>

    <!--If the developer want's to add the favourite button-->
    <slot name="favourite"></slot>
  </nav>
</template>
