import Badge from 'components/ui/Badge';
import Card from 'components/ui/Card';
import TextCustom from 'components/ui/TextCustom';
import type {TTypes} from 'core/pokemon/data/Pokemon';
import * as React from 'react';
import {Alert, Image, StyleProp, View, ViewStyle} from 'react-native';
import {NumberOfPokemon, setBackground} from 'utils';
import styles from './Pokedex.styles';

interface IPokedexItem {
  images: string;
  name: string;
  types: TTypes[];
  style: StyleProp<ViewStyle>;
  number: number;
  onPress: () => void;
}

const PokedexItem = (props: IPokedexItem) => {
  const {name, style, images, number, types, onPress} = props;

  return (
    <Card style={style} onPress={onPress}>
      <Image source={{uri: images}} style={styles.pokeItemImages} />
      <View style={styles.containerNamePokemon}>
        <TextCustom style={styles.fontNumber}>{`#${NumberOfPokemon(
          number,
          3,
        )}`}</TextCustom>
        <TextCustom style={styles.fontName}>{name}</TextCustom>
      </View>
      <View style={styles.typeContainer}>
        {types.map(item => (
          <Badge
            key={`${item.type.name}`}
            label={item.type?.name}
            style={[
              styles.badge,
              {backgroundColor: setBackground(item.type.name)},
            ]}
          />
        ))}
      </View>
    </Card>
  );
};

export default PokedexItem;
