import {Evolution} from '../data/Evolution';
import {Pokedex} from '../data/Pokedex';
import {Pokemon} from '../data/Pokemon';
import {PokemonDetail} from '../data/PokemonDetail';

export interface PokemonRepository {
  getPokedex(): Promise<Pokedex[]>;
  getPokemon(id: number): Promise<Pokemon>;
  getPokemonDetail(id: number): Promise<PokemonDetail>;
  getEvolution(id: number): Promise<Evolution>;
}
