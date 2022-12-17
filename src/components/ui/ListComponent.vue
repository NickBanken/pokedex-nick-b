<script setup lang="ts">
import { defineProps } from "vue";
import { storeToRefs } from "pinia";

import CardComponentVue from "@/components/home/CardComponent.vue";

const { pokemons } = defineProps(["pokemons"]);
</script>

<template>
  <transition
    name="fade"
    v-if="pokemons"
    class="grid gap-5 grid-cols-responsive"
    tag="ul"
    appear
  >
    <transition-group name="list">
      <card-component-vue
        :key="pokemon.name"
        :pokemon="pokemon"
        v-for="pokemon in pokemons"
      />
    </transition-group>
  </transition>
  <h2 class="mt-20 text-xl text-center text-white" v-else>
    Sorry, we konden geen pokemon vinden...
  </h2>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.list-move,
.list-enter-to
 /* apply transition to moving elements */
.list-enter-active {
  transition: all 0.5s ease;
}

.list-enter,
.list-enter-from,
.list-leave-to {
  opacity: 0;
  /* transform: translateX(30px); */
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  opacity: 0;
  position: absolute;
}
</style>

<!-- <style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style> -->
