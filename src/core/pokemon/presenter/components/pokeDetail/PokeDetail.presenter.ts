import {useNavigation, useRoute} from '@react-navigation/native';
import {PokemonDetail} from 'core/pokemon/data/PokemonDetail';
import {useAppDispatch, useAppSelector} from 'hooks/store';
import {useCallback} from 'react';
import {getEvolution, getPokemonDetail} from 'store/pokemon/reducers';

export const usePokeDetailPresenter = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const dataDetail = useAppSelector(state => state.pokemon.pokemonDetail.data);
  const isLoading = useAppSelector(
    state => state.pokemon.pokemonDetail.loading,
  );

  const evolutionLoading = useAppSelector(
    state => state.pokemon.pokemonEvolution.loading,
  );

  const evolutionData = useAppSelector(
    state => state.pokemon.pokemonEvolution.data,
  );

  const handlePokemonDetail = useCallback(async (id: number) => {
    dispatch(await getPokemonDetail(id));
  }, []);

  const onDetail = useCallback((data: PokemonDetail) => {
    navigation.navigate('Detail', {type: 'detail', data});
  }, []);

  const handleGetEvolution = useCallback(async (id: number) => {
    dispatch(await getEvolution(id));
  }, []);

  const onEvolution = useCallback((id: number) => {
    navigation.navigate('Detail', {type: 'detail', data: {id}});
  }, []);

  return {
    dataDetail,
    isLoading,
    route,
    evolutionData,
    evolutionLoading,
    onDetail,
    onEvolution,
    getEvolution: handleGetEvolution,
    getDetailPokemon: handlePokemonDetail,
  };
};
