<script setup lang="ts">
import FilterComponent from "@/components/home/FilterComponent.vue";
import InputComponentVue from "@/components/home/InputComponent.vue";
import ListComponentVue from "@/components/home/ListComponent.vue";
</script>

<template>
  <main class="bg-app px-5 font-display">
    <h1 class="font-display text-[34px] font-bold text-dark">Pokédex</h1>
    <input-component-vue />
    <list-component-vue />
  </main>
  <filter-component />
</template>
