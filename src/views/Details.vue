<script setup lang="ts">
import { onMounted, onBeforeMount, computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import heart from "@/assets/icons/heart.vue";
import heartFull from "@/assets/icons/heartFull.vue";
import chevronLeft from "@/assets/icons/chevron-left.vue";

import DetailPanel from "@/components/ui/DetailPanel.vue";
import DetailComponent from "@/components/details/DetailComponent.vue";

import { addCapitalFirstLetter } from "@/utils/utils";

import { usePokemonStore } from "@/stores/PokemonStore";

const route = useRoute();

const pokemonStore = usePokemonStore();

const { singlePokemon } = storeToRefs(pokemonStore);

let favourite = ref(false);

onBeforeMount(() => {
  pokemonStore.fetchSinglePokemon(route.params.id as string);
});

const checkIfFavourite = () => {
  let arr = JSON.parse(localStorage.getItem("favourite-pokdex-nick") || "[]");
  if (arr.includes(getSinglePokemon.value?.id)) {
    return true;
  } else {
    return false;
  }
};

const getSinglePokemon = computed(() => {
  return pokemonStore.getSinglePokemon;
});

const toggleFavourite = () => {
  console.log("hit");
  favourite.value = !favourite.value;
};

watch(getSinglePokemon, () => {
  favourite.value = checkIfFavourite();
});

watch(favourite, (val) => {
  switch (val) {
    case true:
      console.log("save");
      if (!localStorage.getItem("favourite-pokdex-nick")) {
        let arr = [];
        arr.push(getSinglePokemon.value?.id);
        localStorage.setItem("favourite-pokdex-nick", JSON.stringify(arr));
        return;
      }

      let arr = JSON.parse(localStorage.getItem("favourite-pokdex-nick")!);
      if (!arr.includes(getSinglePokemon.value?.id)) {
        arr.push(getSinglePokemon.value?.id);
        localStorage.setItem("favourite-pokdex-nick", JSON.stringify(arr));
      }
      break;

    case false:
      console.log("remove");

      if (localStorage.getItem("favourite-pokdex-nick")) {
        let arr = JSON.parse(localStorage.getItem("favourite-pokdex-nick")!);

        arr = arr.filter((val: number) => {
          return val != getSinglePokemon.value?.id;
        });
        localStorage.setItem("favourite-pokdex-nick", JSON.stringify(arr));
      }
      break;
  }
});
</script>

<template>
  <main
    v-if="singlePokemon"
    class="p[0.5px] m-0 flex min-h-screen flex-col bg-green-400 px-5 font-display"
  >
    <nav class="flex justify-between mt-5">
      <router-link
        class="flex font-light tracking-wider text-white font-text"
        to="/"
      >
        <chevronLeft class="mr-1" /> Terug</router-link
      >
      <button @click="toggleFavourite">
        <heart v-if="!favourite" />
        <heartFull v-if="favourite" />
      </button>
    </nav>

    <h2 class="mb-8 text-[34px] font-bold text-white">
      {{ addCapitalFirstLetter(getSinglePokemon?.name) }}
    </h2>

    <div>
      <img
        loading="lazy"
        :src="
          getSinglePokemon?.sprites?.other['official-artwork'].front_default
        "
        :alt="getSinglePokemon?.name"
        class="block m-auto mb-10 w-60"
      />
    </div>

    <section class="flex flex-col items-center">
      <DetailPanel>
        <template v-slot:title>About</template>
        <template v-slot:content>
          <DetailComponent :getPokemon="getSinglePokemon" />
        </template>
      </DetailPanel>
    </section>
  </main>
</template>
