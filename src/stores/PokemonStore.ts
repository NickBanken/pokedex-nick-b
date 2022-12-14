import { defineStore } from "pinia";
import axios from "axios";
import type Pokemon from "@/types/pokemon";
import type SinglePokemon from "@/types/singlePokemon";
import type OrderTerm from "@/types/order";

export const usePokemonStore = defineStore("pokeStore", {
  state: () => ({
    error: "" as string,
    loading: false as boolean,
    callPokemons: [] as Pokemon[],
    pokemons: [] as Pokemon[],
    order: "ASC-NUM" as OrderTerm,
    currentOrder: "ASC-NUM" as OrderTerm,
    showOrder: false as boolean,
    singlePokemon: {} as SinglePokemon | undefined,
    localKeyFavourite: "favourite-pokedex-wisemen" as string,
    localKeyTeam: "team-pokedex-wisemen" as string,
  }),

  actions: {
    async fetchPokemons() {
      try {
        this.error = "";
        if (this.pokemons.length === 0) {
          this.loading = true;
          const response = await axios<Pokemon[]>({
            method: "get" as string,
            url: "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon" as string,
          });
          this.callPokemons = response.data;
          this.pokemons = response.data;
          this.loading = false;
        }
        return;
      } catch (err) {
        this.loading = false;
        this.error =
          "Sorry, something went wrong. We could not fetch any Pokémon.";
      }
    },

    async fetchSinglePokemon(id: string) {
      try {
        this.error = "";
        this.loading = true;
        this.singlePokemon = undefined;

        const response = await axios<SinglePokemon>({
          method: "get" as string,
          url: `https://pokeapi.co/api/v2/pokemon/${id}` as string,
        });
        this.singlePokemon = response.data;
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.error =
          "Sorry, something went wrong. We could not fetch any Pokémon.";
      }
    },

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

      let grabTypes = (pokemon: Pokemon) => {
        let typeArr: string[] = [];
        pokemon.types.forEach((typeDetail) => {
          typeArr.push(typeDetail.type.name);
        });
        return typeArr.join(" ");
      };

      if (!isNaN(Number(input))) {
        arr = [...this.callPokemons].filter((element) => {
          return String(element.id).includes(input);
        });
      } else if (typeof input === "string") {
        //Regex for user input - takes all uppercase
        let regex = new RegExp(input + ".*$", "i");

        let filteredPokemon = [...this.callPokemons].filter((pokemon) => {
          return (
            pokemon.name.search(regex) != -1 ||
            grabTypes(pokemon).search(regex) != -1
          );
        });
        arr = filteredPokemon;
      } else {
        arr = [];
      }
      this.pokemons = this.orderItems(arr);
    },
    toggleOrder() {
      this.showOrder = !this.showOrder;
    },

    sortList() {
      this.pokemons = this.orderItems(this.pokemons);
      this.currentOrder = this.order;
    },
    setOrder(order: OrderTerm) {
      this.order = order;
    },

    checkIfListed(item: SinglePokemon | undefined, mode: string) {
      let key: string;
      if (mode === "favourite") {
        key = this.localKeyFavourite;
      } else {
        key = this.localKeyTeam;
      }

      let arr = JSON.parse(localStorage.getItem(key) || "[]");

      if (arr.some((e: SinglePokemon) => e.id === item?.id)) {
        return true;
      }

      return false;
    },
    getLocalStorage(key: string) {
      return JSON.parse(localStorage.getItem(key)!);
    },
    handleToList(val: boolean, item: SinglePokemon | undefined, mode: string) {
      let key: string;
      if (mode === "favourite") {
        key = this.localKeyFavourite;
      } else {
        key = this.localKeyTeam;
      }
      switch (val) {
        case true:
          if (!localStorage.getItem(key)) {
            let arr = [];
            arr.push(item);
            localStorage.setItem(key, JSON.stringify(arr));
            return;
          }

          let arr = JSON.parse(localStorage.getItem(key)!);
          if (!arr.some((e: SinglePokemon) => e.id === item?.id)) {
            arr.push(item);
            localStorage.setItem(key, JSON.stringify(arr));
          }
          break;

        case false:
          if (localStorage.getItem(key)) {
            let arr = JSON.parse(localStorage.getItem(key)!);

            arr = arr.filter((val: SinglePokemon) => {
              return val.id != item?.id;
            });

            localStorage.setItem(key, JSON.stringify(arr));
          }
          break;
      }
    },
    countTotal(mode: string) {
      let key: string;
      if (mode === "favourite") {
        key = this.localKeyFavourite;
      } else {
        key = this.localKeyTeam;
      }

      if (!localStorage.getItem(key)) {
        return 0;
      }

      let arr = JSON.parse(localStorage.getItem(key)!);

      return arr.length;
    },
  },
});
