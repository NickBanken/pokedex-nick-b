<script setup lang="ts">
const { bg } = defineProps(["bg"]);
</script>

<template>
  <main :class="bg" class="m-0 flex min-h-screen flex-col font-display">
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>
