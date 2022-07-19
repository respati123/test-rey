import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonPages from '../core/pokemon/presenter/Pokemon';
import PokeDetail from 'core/pokemon/presenter/components/pokeDetail/PokeDetail';

const Stack = createNativeStackNavigator();

const PokemonNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={PokemonPages} />
      <Stack.Screen name="Detail" component={PokeDetail} />
    </Stack.Navigator>
  );
};

export default PokemonNavigation;
