import {Arrow} from 'assets/images';
import {Evolution} from 'core/pokemon/data/Evolution';
import {usePokeDetailPresenter} from 'core/pokemon/presenter/components/pokeDetail/PokeDetail.presenter';
import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {parseId, setColor, setRandomColor} from 'utils';
import TextCustom from './TextCustom';

interface IRevolutionProps {
  data: Evolution;
}

const Revolution = (props: IRevolutionProps) => {
  const {data} = props;
  const {onEvolution} = usePokeDetailPresenter();

  React.useEffect(() => {}, []);

  const renderBoxEvolution = (item, index) => {
    return (
      <View style={styles.renderBoxRevolution}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => onEvolution(parseId(item.species.url))}
          style={{flexDirection: 'column', alignItems: 'center'}}>
          <View
            style={[
              styles.boxEvolution,
              {borderColor: `#${setRandomColor()}`},
            ]}>
            <TextCustom>{`Image ${item.species.name}`}</TextCustom>
          </View>
          <TextCustom style={styles.fontEvolution}>
            {item.species.name}
          </TextCustom>
        </TouchableOpacity>

        {item.evolves_to.length > 0 ? (
          <Image source={Arrow} style={styles.images} />
        ) : null}
        {item.evolves_to.map(renderBoxEvolution)}
      </View>
    );
  };

  return (
    <View style={styles.containerRevolution}>
      <TextCustom style={styles.fontLabel}>Evolution : </TextCustom>
      {data?.chain?.evolves_to?.map(renderBoxEvolution)}
    </View>
  );
};

const styles = StyleSheet.create({
  containerRevolution: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  images: {
    top: 0,
    resizeMode: 'contain',
    flex: 1,
    marginHorizontal: 4,
    height: 20,
    width: 20,
  },
  renderBoxRevolution: {
    flexDirection: 'row',
    marginVertical: 20,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxEvolution: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 60,
    width: 125,
    height: 125,
    borderRadius: 125 / 2,
    borderWidth: 6,
    marginBottom: 20,
  },
  fontEvolution: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 18,
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
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

export default Revolution;
