import {Abilities} from 'core/pokemon/data/PokemonDetail';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextCustom from './TextCustom';

interface AbilitiesProps {
  data: Abilities[];
}

const AbilitiesComponent = (props: AbilitiesProps) => {
  const {data} = props;
  return (
    <View style={{flexDirection: 'row'}}>
      <TextCustom style={styles.fontLabel}>Abilities :</TextCustom>
      <View style={styles.containerDescriptionData}>
        {data?.map(item => {
          return (
            <View
              key={`${item.ability.name}-abilities`}
              style={styles.containerHidden}>
              <View style={styles.dot} />
              <Text style={styles.fontAbilities}>{`${item.ability.name} ${
                item.is_hidden ? '(hidden)' : ''
              }`}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontLabel: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: 'black',
    fontSize: 16,
    lineHeight: 30,
  },
  containerDescriptionData: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 16,
    marginLeft: 15,
  },
  containerHidden: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: 'black',
  },
  fontAbilities: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
});

export default AbilitiesComponent;
