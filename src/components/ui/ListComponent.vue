<script setup lang="ts">
import { defineProps } from "vue";

import CardComponentVue from "@/components/home/CardComponent.vue";
import ErrorMessage from "@/components/ui/ErrorMessage.vue";
import LoadingComponent from "./LoadingComponent.vue";

import snorlax from "@/assets/images/snorlax.png";

const { pokemons, error, loading, message, lightText } = defineProps([
  "pokemons",
  "error",
  "loading",
  "message",
  "lightText",
]);
</script>

<template>
  <LoadingComponent v-if="loading" />
  <transition
    name="fade"
    v-if="pokemons.length > 0"
    class="relative grid gap-3 sm:grid-cols-2"
    tag="ul"
    appear
  >
    <transition-group name="list">
      <card-component-vue
        :key="pokemon.name"
        :pokemon="pokemon"
        :centered="pokemons.length == 1"
        v-for="pokemon in pokemons"
      />
    </transition-group>
  </transition>
  <ErrorMessage :error="error" :img="snorlax" v-else-if="error"></ErrorMessage>
  <h2
    :class="lightText ? 'text-white' : 'text-black'"
    class="mt-20 text-center text-xl"
    v-else-if="!loading"
  >
    {{ message }}
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
  left: 0;
  max-width: 424px;
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
