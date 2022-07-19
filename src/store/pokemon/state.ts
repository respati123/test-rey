export type TInitialState = {
  pokedexList: {
    loading: boolean;
    pokedex: [];
    refetch: boolean;
  };
  pokemonDetail: {
    data: object;
    loading: boolean;
  };
  pokemonEvolution: {
    data: object;
    loading: boolean;
  };
};

export const InitialState: TInitialState = {
  pokedexList: {
    loading: false,
    pokedex: [],
    refetch: false,
  },
  pokemonDetail: {
    data: {},
    loading: false,
  },
  pokemonEvolution: {
    data: {},
    loading: false,
  },
};
