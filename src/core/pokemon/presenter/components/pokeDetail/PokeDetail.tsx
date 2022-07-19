import Abilities from 'components/ui/Abilities';
import ButtonCustom from 'components/ui/Button';
import Header from 'components/ui/Header';
import ImagesPokemon from 'components/ui/ImagesPokemon';
import Revolution from 'components/ui/Revolution';
import Status from 'components/ui/Status';
import TextCustom from 'components/ui/TextCustom';
import Types from 'components/ui/Types';
import {useAppDispatch, useAppSelector} from 'hooks/store';
import * as React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {usePokeDetailPresenter} from './PokeDetail.presenter';
import styles from './PokeDetail.styles';

type PokeDetailProps = {};

export type PokeDetailRefProps = {
  fetching: (id: number) => void;
};

const PokeDetail = React.forwardRef<PokeDetailRefProps, PokeDetailProps>(
  (props, ref) => {
    const {
      dataDetail,
      onDetail,
      getDetailPokemon,
      getEvolution,
      evolutionData,
      route,
    } = usePokeDetailPresenter();

    React.useEffect(() => {
      if (Object.keys(dataDetail).length > 0) {
        fetching(route.params?.data.id);
      }
      return () => {};
    }, [route]);

    const params = route.params;
    const fetching = React.useCallback(async (id: number) => {
      getDetailPokemon(id);
      getEvolution(id);
    }, []);

    React.useImperativeHandle(ref, () => ({fetching}), [fetching]);

    return (
      <>
        {params?.type === 'detail' && (
          <Header style={{paddingHorizontal: 24}} />
        )}
        <ScrollView
          scrollEnabled={true}
          contentContainerStyle={{paddingHorizontal: 30}}
          style={{flex: 1, backgroundColor: '#fff'}}>
          <TextCustom style={styles.fontTitle}>{dataDetail?.name}</TextCustom>
          <Image
            source={{uri: dataDetail?.sprites?.front_default}}
            style={styles.pokeItemImages}
          />
          <View style={styles.containerDescription}>
            <View style={styles.containerDescriptionData}>
              <TextCustom style={styles.fontLabel}>Weight :</TextCustom>
              <TextCustom style={styles.fontValue}>
                {dataDetail.weight}
              </TextCustom>
            </View>
            <View style={styles.containerDescriptionData}>
              <TextCustom style={styles.fontLabel}>Height :</TextCustom>
              <TextCustom style={styles.fontValue}>
                {dataDetail.height}
              </TextCustom>
            </View>
            <Abilities data={dataDetail.abilities} />
            <Types data={dataDetail.types} />

            {params?.type !== 'detail' && (
              <ButtonCustom
                style={styles.buttonMoreDetail}
                title={'More Detail'}
                onPress={() => onDetail(dataDetail)}
              />
            )}
            {params?.type === 'detail' && (
              <ImagesPokemon data={dataDetail.sprites} />
            )}
            {params?.type === 'detail' && <Status data={dataDetail.stats} />}
            {params?.type === 'detail' && <Revolution data={evolutionData} />}
          </View>
        </ScrollView>
      </>
    );
  },
);

export default PokeDetail;
