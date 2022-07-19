import * as React from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import Header from 'components/ui/Header';
import styles from './Pokemon.styles';
import {LogoHome} from '../../../assets/images/index';
import ButtonCustom from 'components/ui/Button';
import Pokedex from './components/pokedex/Pokedex';
import BottomSheet, {BottomSheetRefProps} from 'components/ui/BottomSheet';
import {Pokemon} from '../data/Pokemon';
import PokeDetail, {
  PokeDetailRefProps,
} from './components/pokeDetail/PokeDetail';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const PokemonPages = () => {
  const [isModal, setModal] = React.useState(false);

  const ref = React.useRef<BottomSheetRefProps>(null);
  const refPokemonDetail = React.useRef<PokeDetailRefProps>(null);

  const handleOnPress = React.useCallback((data: Pokemon, id: number) => {
    setModal(!isModal);
    if (ref?.current?.isActive()) {
      ref?.current?.scrollTo(0);
    } else {
      refPokemonDetail?.current?.fetching(id);
      ref?.current?.scrollTo(-SCREEN_HEIGHT / 1.2);
    }
  }, []);
  return (
    <View style={styles.containerHome}>
      <Header style={{paddingHorizontal: 24}} />
      <ScrollView
        scrollEventThrottle={400}
        style={styles.containerScrollView}
        contentContainerStyle={{paddingBottom: 10}}>
        <View style={styles.containerContent}>
          <View style={styles.containerImagesHome}>
            <Image source={LogoHome} style={styles.imagesLogo} />
          </View>
          <View style={styles.containerLogoFont}>
            <Text style={styles.fontLogoHome}>
              All the Pokémon data you'll ever need in one place!
            </Text>
          </View>
          <View style={styles.containerLogoTitle}>
            <Text style={styles.titleLogoHome}>
              Thousands of data compiled into one place
            </Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <ButtonCustom title="Check PokèDex" />
        </View>
        <Pokedex onPress={handleOnPress} />
      </ScrollView>
      {isModal && (
        <BottomSheet ref={ref}>
          <PokeDetail ref={refPokemonDetail} />
        </BottomSheet>
      )}
    </View>
  );
};

export default PokemonPages;
