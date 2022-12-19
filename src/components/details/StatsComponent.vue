<script setup lang="ts">
import { defineProps } from "vue";
import type { Stat } from "@/types/singlePokemon";

import { addCapitalFirstLetter } from "@/utils/utils";

const { getPokemon } = defineProps(["getPokemon"]);

const convertToShorthand = (string: string) => {
  if (string === "special-attack") {
    return "Sp. Atk";
  } else if (string === "special-defense") {
    return "Sp. Def";
  } else {
    return addCapitalFirstLetter(string);
  }
};

const calculateTotal = (arr: Array<Stat>) => {
  const arr2 = arr.map((el) => {
    return el["base_stat"];
  });
  return arr2.reduce((acc, curr) => acc + curr, 0);
};
</script>

<template>
  <ul class="flex flex-col gap-2 font-text">
    <li class="grid grid-cols-4" v-for="statInfo in getPokemon.stats">
      <p class="text-grey">{{ convertToShorthand(statInfo.stat.name) }}</p>
      <p>{{ statInfo["base_stat"] }}</p>
      <progress
        :class="statInfo['base_stat'] <= 50 ? 'low' : 'high'"
        class="col-span-2 h-[5px] w-full self-center rounded-full"
        :value="statInfo['base_stat']"
        max="255"
      ></progress>
    </li>
    <li class="grid grid-cols-4">
      <p class="text-grey">Total</p>
      <p>{{ calculateTotal(getPokemon.stats) }}</p>
      <progress
        :class="calculateTotal(getPokemon.stats)"
        class="high col-span-2 h-[5px] w-full self-center rounded-full"
        :value="calculateTotal(getPokemon.stats)"
        max="255"
      ></progress>
    </li>
  </ul>
</template>

<style scoped>
progress {
  background-color: rgba(172, 178, 193, 0.2);
}

progress::-webkit-progress-bar {
  background-color: rgba(172, 178, 193, 0.2);
  border-radius: 20px;
}

progress.high::-webkit-progress-value {
  background-color: #70c18f;
  border-radius: 20px;
}

progress.high::-moz-progress-bar {
  background-color: #70c18f;
}

progress.low::-webkit-progress-value {
  border-radius: 20px;
  background-color: #df6563;
}

progress.low::-moz-progress-bar {
  background-color: #df6563;
}
</style>
