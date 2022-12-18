<script setup lang="ts">
import chevronLeft from "@/assets/icons/chevron-left.vue";
const { darkMode } = defineProps(["darkMode"]);
</script>

<template>
  <nav
    :class="darkMode ? 'text-black' : 'text-white'"
    class="mt-5 flex justify-between"
  >
    <a
      class="flex cursor-pointer font-text font-light tracking-wider"
      @click="$router.go(-1)"
    >
      <chevronLeft
        :class="darkMode ? 'fill-black' : 'fill-white'"
        class="mr-1"
      />
      Terug
    </a>

    <!--If the developer want's to add the favourite button-->
    <slot name="favourite"></slot>
  </nav>
</template>
