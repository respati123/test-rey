import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {InitialState} from './state';
import {PokemonRepositoryImpl} from 'core/pokemon/data/PokemonRepositoryImpl';
import {PokemonServiceImpl} from 'core/pokemon/domain/PokemonUseCase';

export function getPokemonData() {
  let pokemonRepository = new PokemonRepositoryImpl();
  let pokemonService = new PokemonServiceImpl(pokemonRepository);
  return pokemonService;
}

export const getPokedex = createAsyncThunk('pokemon/getPokedex', async () => {
  let response = await getPokemonData().getPokedex();

  return response;
});

export const getPokemonDetail = createAsyncThunk(
  'pokemon/getPokemonDetail',
  async (id: number) => {
    let response = await getPokemonData().getPokemonDetail(id);
    return response;
  },
);

export const getEvolution = createAsyncThunk(
  'pokemon/getEvolution',
  async (id: number) => {
    let response = await getPokemonData().getEvolution(id);
    return response;
  },
);

export const PokemnonSlice = createSlice({
  name: 'pokemon',
  initialState: InitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPokedex.pending, state => {
      state.pokedexList.loading = !state.pokedexList.loading;
    });
    builder.addCase(getPokedex.fulfilled, (state, action) => {
      state.pokedexList.pokedex = action.payload;
      state.pokedexList.loading = !state.pokedexList.loading;
    });

    builder.addCase(getPokedex.rejected, state => {
      state.pokedexList.loading = !state.pokedexList.loading;
    });
    builder.addCase(getPokemonDetail.pending, state => {
      state.pokemonDetail.loading = !state.pokemonDetail.loading;
    });
    builder.addCase(getPokemonDetail.fulfilled, (state, action) => {
      state.pokemonDetail.data = action.payload;
      state.pokemonDetail.loading = !state.pokemonDetail.loading;
    });
    builder.addCase(getEvolution.pending, state => {
      state.pokemonEvolution.loading = !state.pokemonEvolution.loading;
    });
    builder.addCase(getEvolution.fulfilled, (state, action) => {
      state.pokemonEvolution.data = action.payload;
      state.pokemonEvolution.loading = !state.pokemonEvolution.loading;
    });
  },
});
export default PokemnonSlice.reducer;
