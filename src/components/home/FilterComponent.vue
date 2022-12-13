<script setup lang="ts">
import ButtonComponentVue from "../ui/SortButtonComponent.vue";
</script>

<template>
  <div
    class="fixed bottom-0 z-10 flex w-full flex-col rounded-t-2xl bg-white px-5 font-display"
  >
    <h2 class="py-4 text-lg font-bold">Sorteren op</h2>

    <div class="flex flex-col">
      <button-component-vue :icon="'src/assets/icons/az-down.svg'">
        <template v-slot:desc>Alfabetisch oplopend</template>
      </button-component-vue>

      <button-component-vue :icon="'src/assets/icons/az-up.svg'">
        <template v-slot:desc>Alfabetisch aflopend</template>
      </button-component-vue>

      <button-component-vue :icon="'src/assets/icons/num-up.svg'">
        <template v-slot:desc>Numeriek oplopend</template>
      </button-component-vue>

      <button-component-vue :icon="'src/assets/icons/num-down.svg'">
        <template v-slot:desc>Numeriek aflopend</template>
      </button-component-vue>

      <button
        class="mt-5 mb-3 rounded-2xl bg-zinc-900 p-3 font-text text-lg text-white"
      >
        Toepassen
      </button>

      <div
        class="my-2 h-[5px] w-[143px] self-center rounded-2xl bg-zinc-900"
      ></div>
    </div>
  </div>

  <div class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
</template>
