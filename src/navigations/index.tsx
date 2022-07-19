import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PokemonNavigation from './PokemonNavigation';

const Navigation = () => {
  return (
    <NavigationContainer>
      <PokemonNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
