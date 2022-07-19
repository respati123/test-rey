import {TTypes} from 'core/pokemon/data/Pokemon';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {setBackground} from 'utils';
import Badge from './Badge';
import TextCustom from './TextCustom';

interface TTypesProps {
  data: TTypes[];
}

const Types = (props: TTypesProps) => {
  const {data} = props;
  return (
    <View style={styles.containerTypes}>
      <TextCustom style={styles.fontLabel}>Type :</TextCustom>
      {data?.map((item: TTypes, index: number) => {
        return (
          <Badge
            key={`${item.type.name}-${index}`}
            label={item.type?.name}
            style={[
              styles.badge,
              {backgroundColor: setBackground(item.type.name)},
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerTypes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontLabel: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: 'black',
    fontSize: 16,
    lineHeight: 30,
    marginRight: 10,
  },
  badge: {
    borderRadius: 25,
    marginRight: 10,
    textTransform: 'capitalize',
    width: '29.9%',
    flexDirection: 'column',
    backgroundColor: 'red',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 5,
  },
});

export default Types;
