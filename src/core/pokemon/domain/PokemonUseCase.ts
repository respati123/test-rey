import {Evolution} from '../data/Evolution';
import {Pokedex} from '../data/Pokedex';
import {Pokemon} from '../data/Pokemon';
import {PokemonDetail} from '../data/PokemonDetail';
import {PokemonRepository} from './PokemonRepository';

export interface PokemonService {
  getPokedex(): Promise<Pokedex[]>;
  getPokemon(id: number): Promise<Pokemon>;
  getPokemonDetail(id: number): Promise<PokemonDetail>;
  getEvolution(id: number): Promise<Evolution>;
}

export class PokemonServiceImpl implements PokemonService {
  pokemonRepo: PokemonRepository;

  constructor(pokemonRepo: PokemonRepository) {
    this.pokemonRepo = pokemonRepo;
  }
  getEvolution(id: number): Promise<Evolution> {
    return this.pokemonRepo.getEvolution(id);
  }
  getPokemonDetail(id: number): Promise<PokemonDetail> {
    return this.pokemonRepo.getPokemonDetail(id);
  }
  getPokemon(id: number): Promise<Pokemon> {
    return this.pokemonRepo.getPokemon(id);
  }
  getPokedex(): Promise<Pokedex[]> {
    return this.pokemonRepo.getPokedex();
  }
}
