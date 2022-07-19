import {BaseAxios} from 'config/api';
import {API_EVOLUTION, API_POKEDEX, API_POKEMON} from 'constants/api';
import {PokemonRepository} from '../domain/PokemonRepository';
import {Evolution, TChain} from './Evolution';
import {Pokedex} from './Pokedex';
import {Pokemon, TTypes} from './Pokemon';
import {Abilities, PokemonDetail, TStats} from './PokemonDetail';

interface ResponsePokedex {
  pokemon_entries: Pokedex[];
}

interface ResponsePokemon {
  types: [];
  sprites: {front_default: string};
  name: string;
}

interface ResponsePokemonDetail {
  sprites: object;
  weight: number;
  height: number;
  name: string;
  abilities: Abilities;
  types: TTypes[];
  stats: TStats[];
}

interface ResponseEvolution {
  chain: TChain;
}

export class PokemonRepositoryImpl implements PokemonRepository {
  async getEvolution(id: number): Promise<Evolution> {
    let response = await BaseAxios().get<ResponseEvolution>(
      `${API_EVOLUTION}/${id}`,
    );

    return new Evolution(response.data.chain);
  }
  async getPokemonDetail(id: number): Promise<PokemonDetail> {
    let response = await BaseAxios().get<ResponsePokemonDetail>(
      `${API_POKEMON}/${id}`,
    );

    const {sprites, weight, height, name, abilities, types, stats} =
      response.data;

    return new PokemonDetail(
      sprites,
      weight,
      height,
      name,
      abilities,
      types,
      stats,
    );
  }
  async getPokemon(id: number): Promise<Pokemon> {
    let response = await BaseAxios().get<ResponsePokemon>(
      `${API_POKEMON}/${id}`,
    );
    const name = response.data.name;
    const types = response.data.types;
    const images = response.data.sprites.front_default;

    return new Pokemon(name, types, images);
  }

  async getPokedex(): Promise<Pokedex[]> {
    let response = await BaseAxios().get<ResponsePokedex>(API_POKEDEX);

    return response.data.pokemon_entries;
  }
}
