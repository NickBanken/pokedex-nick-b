interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  types: TypeElement[];
}

export interface Sprites {
  front_default: string;
}

export interface TypeElement {
  slot: number;
  type: TypeType;
}

export interface TypeType {
  name: string;
}

export default Pokemon;
