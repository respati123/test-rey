import {Pokedex} from 'core/pokemon/data/Pokedex';
import {useAppDispatch, useAppSelector} from 'hooks/store';
import React, {useCallback, useEffect} from 'react';
import {getPokedex, getPokemonData} from 'store/pokemon/reducers';

export const usePokedex = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.pokemon.pokedexList.loading);
  const pokedexList = useAppSelector(
    state => state.pokemon.pokedexList.pokedex,
  );
  const [offset] = React.useState<number>(5);
  const [isLoadMore, setIsLoadMore] = React.useState(false);
  const [_, setLoading] = React.useState(false);
  const [isModalDetail, setModalDetail] = React.useState(false);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const list = pokedexList?.filter((_, index) => index <= offset);
    setPokemon(list);
  }, [pokedexList, offset]);

  const handleGetPokedex = useCallback(
    () => dispatch(getPokedex()),
    [dispatch],
  );

  const setPokemon = useCallback(
    async (pokes: Pokedex[]) => {
      setLoading(true);
      for (var poke of pokes) {
        try {
          const result = await getPokemonData().getPokemon(poke.entry_number);
          setData(state => [...state, result]);
        } catch (err) {}
      }
      setLoading(false);
    },
    [data, loading, setData],
  );

  const handleRefetch = useCallback(() => {
    setIsLoadMore(true);
  }, [isLoadMore]);

  let loading = isLoading;

  const handlePokemonDetail = useCallback(() => {
    setModalDetail(!isModalDetail);
  }, [isModalDetail]);

  return {
    getPokedex: handleGetPokedex,
    loading,
    data,
    isLoadMore,
    handleModalDetail: handlePokemonDetail,
    loadMore: () => handleRefetch(),
  };
};
