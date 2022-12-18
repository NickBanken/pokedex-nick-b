<script setup lang="ts">
import { onMounted, onBeforeMount, computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import heart from "@/assets/icons/heart.vue";
import heartFull from "@/assets/icons/heartFull.vue";

import DetailPanel from "@/components/ui/DetailPanel.vue";
import DetailComponent from "@/components/details/DetailComponent.vue";
import StatsComponent from "@/components/details/StatsComponent.vue";
import PageLayout from "@/components/ui/PageLayout.vue";

import Navigation from "@/components/ui/Navigation.vue";
import LightBox from "../components/ui/LightBox.vue";

import { addCapitalFirstLetter } from "@/utils/utils";

import { usePokemonStore } from "@/stores/PokemonStore";

const route = useRoute();

const pokemonStore = usePokemonStore();

const { singlePokemon } = storeToRefs(pokemonStore);

let favourite = ref(false);
let team = ref(false);

onBeforeMount(() => {
  pokemonStore.fetchSinglePokemon(route.params.id as string);
});

const toggleFavourite = () => {
  favourite.value = !favourite.value;
};

const toggleTeam = () => {
  team.value = !team.value;
};

watch(singlePokemon, () => {
  favourite.value = pokemonStore.checkIfListed(
    pokemonStore.singlePokemon,
    "favourite"
  );
  team.value = pokemonStore.checkIfListed(pokemonStore.singlePokemon, "team");
});

watch(favourite, (val) => {
  pokemonStore.handleToList(val, pokemonStore.singlePokemon, "favourite");
});

watch(team, (val) => {
  pokemonStore.handleToList(val, pokemonStore.singlePokemon, "team");
});
</script>

<template>
  <PageLayout :bg="'bg-green-400'">
    <div v-if="singlePokemon">
      <Navigation>
        <template v-slot:favourite>
          <div class="cursor-pointer">
            <heart @click="toggleFavourite" v-if="!favourite" />
            <heartFull @click="toggleFavourite" v-if="favourite" />
          </div>
        </template>
      </Navigation>

      <h2 class="mb-8 text-[34px] font-bold text-white">
        {{ addCapitalFirstLetter(pokemonStore.singlePokemon?.name) }}
      </h2>

      <div class="mx-auto mb-10 h-60 w-60">
        <LightBox
          :img="
            pokemonStore.singlePokemon?.sprites?.other['official-artwork']
              .front_default
          "
        >
          <img
            loading="lazy"
            :src="
              pokemonStore.singlePokemon?.sprites?.other['official-artwork']
                .front_default
            "
            :alt="pokemonStore.singlePokemon?.name"
          />
        </LightBox>
      </div>

      <section class="grid grid-cols-responsive gap-5">
        <DetailPanel>
          <template v-slot:title>INFO</template>
          <template v-slot:content>
            <DetailComponent :getPokemon="pokemonStore.singlePokemon" />
          </template>
        </DetailPanel>

        <DetailPanel>
          <template v-slot:title>STATISTIEKEN</template>
          <template v-slot:content>
            <StatsComponent :getPokemon="pokemonStore.singlePokemon" />
          </template>
        </DetailPanel>
      </section>

      <button
        @click="toggleTeam"
        class="fixed bottom-10 left-2/4 box-border block w-max -translate-x-2/4 rounded-full bg-dark px-20 py-3 font-bold text-white"
      >
        {{ team ? "Verwijderen van mijn team" : "Toevoegen aan mijn team" }}
      </button>
    </div>
  </PageLayout>
</template>
