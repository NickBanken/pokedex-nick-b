<script setup lang="ts">
import { onBeforeMount, ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import heart from "@/assets/icons/heart.vue";
import heartFull from "@/assets/icons/heartFull.vue";

import DetailPanel from "@/components/ui/DetailPanel.vue";
import DetailComponent from "@/components/details/DetailComponent.vue";
import StatsComponent from "@/components/details/StatsComponent.vue";
import PageLayout from "@/components/ui/PageLayout.vue";
import LoadingComponent from "@/components/ui/LoadingComponent.vue";
import ErrorMessage from "@/components/ui/ErrorMessage.vue";
import Navigation from "@/components/ui/Navigation.vue";
import LightBox from "../components/ui/LightBox.vue";

import snorlax from "@/assets/images/snorlax.png";

import { addCapitalFirstLetter } from "@/utils/utils";
import { gradientBgPicker } from "@/utils/gradientBgPicker";

import { usePokemonStore } from "@/stores/PokemonStore";
import type Pokemon from "@/types/pokemon";

const route = useRoute();
const pokemonStore = usePokemonStore();
const { singlePokemon } = storeToRefs(pokemonStore);

let favourite = ref(false);
let team = ref(false);
let imageLoaded = ref(false);

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

const handleTeamButton = computed(() => {
  let team = pokemonStore.getLocalStorage(pokemonStore.localKeyTeam);
  if (team) {
    let inTeam = team.some((teamPokemon: Pokemon) => {
      return teamPokemon.name === singlePokemon.value?.name;
    });
    return team.length >= 6 && !inTeam;
  }
});
</script>

<template>
  <transition name="fade" appear>
    <PageLayout
      :bg="gradientBgPicker(singlePokemon?.types[0].type.name)"
      class="pb-40"
    >
      <LoadingComponent v-if="pokemonStore.loading" />
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
            <transition name="fade">
              <img
                v-on:load="imageLoaded = true"
                v-show="imageLoaded"
                :src="
                  pokemonStore.singlePokemon?.sprites?.other['official-artwork']
                    .front_default
                "
                :alt="pokemonStore.singlePokemon?.name"
              />
            </transition>
          </LightBox>
        </div>

        <section class="grid gap-5 grid-cols-responsive">
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
          :disabled="handleTeamButton"
          @click="toggleTeam"
          :class="handleTeamButton ? 'bg-dark-grey' : ''"
          class="box-border fixed block px-20 py-3 font-bold text-white rounded-full bottom-10 left-2/4 w-max -translate-x-2/4 bg-dark"
        >
          {{
            handleTeamButton
              ? "Je kunt maximum 6 Pokémons toevoegen aan je team."
              : team
              ? "Verwijderen van mijn team"
              : "Toevoegen aan mijn team"
          }}
        </button>
      </div>
      <div v-else-if="pokemonStore.error && !pokemonStore.loading">
        <Navigation :darkMode="true"> </Navigation>
        <ErrorMessage
          :error="'Sorry, we could not connect to the Pokédex services.'"
          :img="snorlax"
        ></ErrorMessage>
      </div>
    </PageLayout>
  </transition>
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
</style>
