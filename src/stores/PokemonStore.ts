import { defineStore } from "pinia";

import axios from "axios";

import type Pokemon from "@/types/pokemon";
import type OrderTerm from "@/types/order";

export const usePokemonStore = defineStore("pokeStore", {
  state: () => ({
    pokemons: {} as Pokemon[],
    order: "DESC-AZ" as OrderTerm,
    showOrder: true as boolean,
  }),
  actions: {
    async getPokemons() {
      const response = await axios<Pokemon[]>({
        method: "get" as string,
        url: "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon" as string,
      });
      this.pokemons = response.data;
    },

    orderPokemon() {
      this.pokemons = [...this.pokemons].sort((a: Pokemon, b: Pokemon) => {
        if (this.order === "DESC-AZ") return a.name < b.name ? 1 : -1;
        else if (this.order === "ASC-NUM") return a.id > b.id ? 1 : -1;
        else if (this.order === "DESC-NUM") return a.id < b.id ? 1 : -1;
        else return a.name > b.name ? 1 : -1;
      });
    },

    toggleOrder() {
      this.showOrder = !this.showOrder;
    },

    setOrder(order: OrderTerm) {
      this.order = order;
    },
  },
});
