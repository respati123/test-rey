import {TStats} from 'core/pokemon/data/PokemonDetail';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {setColor} from 'utils';
import Circle from './Circle';
import TextCustom from './TextCustom';

interface IStatusProps {
  data: TStats[];
}

const Status = (props: IStatusProps) => {
  const {data} = props;
  return (
    <View style={styles.containerStatus}>
      <TextCustom style={styles.fontLabel}>Stats :</TextCustom>
      <View style={styles.containerBoxStatus}>
        {data?.map((item, index) => {
          return (
            <Circle
              styleCircle={{borderColor: setColor(item.stat.name)}}
              styleTextStat={[
                styles.fontStat,
                {
                  color: setColor(item.stat.name),
                },
              ]}
              key={`${index}-${item.stat.name}-stats`}
              base_stat={item?.base_stat}
              name={item?.stat?.name}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStatus: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  fontStat: {
    fontSize: 28,
    fontWeight: '700',
  },
  containerBoxStatus: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  fontLabel: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: 'black',
    fontSize: 16,
    lineHeight: 30,
    marginRight: 10,
  },
});

export default Status;
