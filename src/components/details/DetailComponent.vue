<script setup lang="ts">
import { defineProps } from "vue";
import TypeLabel from "../ui/TypeLabel.vue";

import { addCapitalFirstLetter } from "@/utils/utils";

const { getPokemon } = defineProps(["getPokemon"]);

console.log(getPokemon);
</script>

<template>
  <div class="grid grid-cols-2 gap-2 font-text">
    <p class="text-grey">Type</p>
    <div>
      <type-label :pokemon="getPokemon" />
    </div>

    <p class="text-grey">Nummer</p>
    <p>{{ String(getPokemon.id).padStart(3, "0") }}</p>

    <p class="text-grey">Hoogte</p>
    <p>{{ String(getPokemon.height / 10) }}m</p>

    <p class="text-grey">Gewicht</p>
    <p>{{ String(getPokemon.weight / 10) }} kg</p>

    <p class="text-grey">Vaardigheden</p>
    <ul>
      <li v-for="abilityInfo in getPokemon.abilities">
        {{ addCapitalFirstLetter(abilityInfo.ability.name) }}
      </li>
    </ul>
  </div>
</template>
