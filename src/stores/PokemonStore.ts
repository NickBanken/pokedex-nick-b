import { defineStore } from "pinia";

import axios from "axios";

import type Pokemon from "@/types/pokemon";
import type OrderTerm from "@/types/order";

export const usePokemonStore = defineStore("pokeStore", {
  state: () => ({
    callPokemons: {} as Pokemon[],
    pokemons: {} as Pokemon[],
    order: "DESC-AZ" as OrderTerm,
    showOrder: false as boolean,
  }),
  actions: {
    async getPokemons() {
      const response = await axios<Pokemon[]>({
        method: "get" as string,
        url: "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon" as string,
      });
      this.callPokemons = response.data;
      this.pokemons = response.data;
    },

    // orderPokemon() {
    //   let arr: Pokemon[];

    //   arr = [...this.pokemons].sort((a: Pokemon, b: Pokemon) => {
    //     if (this.order === "DESC-AZ") return a.name < b.name ? 1 : -1;
    //     else if (this.order === "ASC-NUM") return a.id > b.id ? 1 : -1;
    //     else if (this.order === "DESC-NUM") return a.id < b.id ? 1 : -1;
    //     else return a.name > b.name ? 1 : -1;
    //   });

    // },

    orderItems(arr: Pokemon[]) {
      return [...arr].sort((a: Pokemon, b: Pokemon) => {
        if (this.order === "DESC-AZ") return a.name < b.name ? 1 : -1;
        else if (this.order === "ASC-NUM") return a.id > b.id ? 1 : -1;
        else if (this.order === "DESC-NUM") return a.id < b.id ? 1 : -1;
        else return a.name > b.name ? 1 : -1;
      });
    },

    searchPokemons(input: string) {
      let arr: Pokemon[];

      if (!isNaN(Number(input))) {
        arr = [...this.callPokemons].filter((element) => {
          return String(element.id).includes(input);
        });
      } else if (typeof input === "string") {
        let regex = new RegExp(input + ".+$", "i");
        arr = [...this.callPokemons].filter((element) => {
          return element.name.search(regex) != -1;
        });
      } else {
        arr = [];
      }

      this.pokemons = this.orderItems(arr);
    },

    toggleOrder() {
      this.showOrder = !this.showOrder;
    },

    setOrder(order: OrderTerm) {
      this.order = order;
    },
  },
});
