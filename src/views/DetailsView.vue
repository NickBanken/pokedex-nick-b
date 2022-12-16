<script setup lang="ts">
import { onMounted, onBeforeMount, computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import heart from "@/assets/icons/heart.vue";
import heartFull from "@/assets/icons/heartFull.vue";

import DetailPanel from "@/components/ui/DetailPanel.vue";
import DetailComponent from "@/components/details/DetailComponent.vue";
import Navigation from "@/components/ui/Navigation.vue";

import { addCapitalFirstLetter } from "@/utils/utils";

import { usePokemonStore } from "@/stores/PokemonStore";

const route = useRoute();

const pokemonStore = usePokemonStore();

const { singlePokemon } = storeToRefs(pokemonStore);

let favourite = ref(false);

onBeforeMount(() => {
  pokemonStore.fetchSinglePokemon(route.params.id as string);
});

const getSinglePokemon = computed(() => {
  return pokemonStore.getSinglePokemon;
});

const toggleFavourite = () => {
  favourite.value = !favourite.value;
};

watch(singlePokemon, () => {
  console.log(getSinglePokemon.value);
  favourite.value = pokemonStore.checkIfFavourite(getSinglePokemon.value);
});

watch(favourite, (val) => {
  pokemonStore.handleFavourite(val, getSinglePokemon.value);
});
</script>

<template>
  <main
    v-if="singlePokemon"
    class="p[0.5px] m-0 flex min-h-screen flex-col bg-green-400 px-5 font-display"
  >
    <Navigation>
      <template v-slot:favourite>
        <heart @click="toggleFavourite" v-if="!favourite" />
        <heartFull @click="toggleFavourite" v-if="favourite" />
      </template>
    </Navigation>

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
