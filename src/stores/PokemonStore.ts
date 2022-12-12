import { defineStore } from "pinia";
import axios from "axios";

import type Pokemon from "@/types/pokemon";

export const usePokemonStore = defineStore("pokeStore", {
  state: () => ({
    pokemons: {} as Pokemon[],
  }),
  actions: {
    async getPokemons() {
      const response = await axios<Pokemon[]>({
        method: "get" as string,
        url: "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon" as string,
      });

      this.pokemons = response.data;
    },
  },
});
