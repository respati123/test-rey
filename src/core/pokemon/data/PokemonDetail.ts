import {TTypes} from './Pokemon';

export class PokemonDetail {
  sprites: object;
  weight: number;
  height: number;
  name: string;
  abilities: Abilities;
  types: TTypes[];
  stats: TStats[];

  constructor(
    sprites: object,
    weight: number,
    height: number,
    name: string,
    abilities: Abilities,
    types: TTypes[],
    stats: TStats[],
  ) {
    this.abilities = abilities;
    this.sprites = sprites;
    this.weight = weight;
    this.height = height;
    this.name = name;
    this.types = types;
    this.stats = stats;
  }
}

export type TStats = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export class Abilities {
  ability: AbilityObject;
  is_hidden: boolean;

  constructor(abilities: AbilityObject, is_hidden: boolean) {
    this.ability = abilities;
    this.is_hidden = is_hidden;
  }
}

type AbilityObject = {
  name: string;
};
