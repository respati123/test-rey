import * as React from 'react';
import {BackgroundPokeDex} from 'assets/images';
import TextCustom from 'components/ui/TextCustom';
import {ImageBackground, Text, View} from 'react-native';
import styles from './Pokedex.styles';
import {usePokedex} from './Pokedex.presenter';
import PokedexItem from './PokedexItem';
import {Pokemon} from 'core/pokemon/data/Pokemon';

type PokedexProps = {
  onPress: (data: Pokemon, id: number) => void;
};

const Pokedex = (props: PokedexProps) => {
  const {onPress} = props;
  const {getPokedex, data, isLoadMore, loading} = usePokedex();

  React.useEffect(() => {
    getPokedex();
  }, []);

  return (
    <ImageBackground source={BackgroundPokeDex} style={styles.containerPokeDex}>
      <View style={styles.headerSection}>
        <TextCustom style={styles.fontTitle}>
          {!loading ? 'PokèDex' : 'loading'}
        </TextCustom>
        <TextCustom style={styles.fontDescription}>
          All Generation totaling 999999 Pokemon
        </TextCustom>
      </View>
      {loading || isLoadMore ? (
        <Text>Loading</Text>
      ) : (
        data.map((item: Pokemon, index) => (
          <PokedexItem
            onPress={() => onPress(item, index + 1)}
            number={index + 1}
            style={styles.cardPoke}
            key={`${index}-pokedex-${item.name}`}
            name={item.name}
            images={item.images}
            types={item.types}
          />
        ))
      )}
    </ImageBackground>
  );
};

export default Pokedex;
