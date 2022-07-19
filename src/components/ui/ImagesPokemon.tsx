import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TextCustom from './TextCustom';

interface IImagesPokemon {
  data: object;
}

const ImagesPokemon = (props: IImagesPokemon) => {
  const {data} = props;
  return (
    <View>
      <TextCustom style={styles.fontLabel}>Other Images :</TextCustom>
      <View style={styles.containerImages}>
        {Object.values(data)
          ?.filter(item => {
            if (typeof item === 'object') {
              return false;
            }
            if (item === null) {
              return false;
            }
            return true;
          })
          .map((image, index) => {
            return (
              <View key={`${image}-pokemon-${index}`} style={styles.boxImages}>
                <Image
                  source={{uri: image}}
                  key={`${index}-images-${image}`}
                  style={styles.images}
                />
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
    marginRight: 10,
  },
  containerImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  boxImages: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, .2)',
    margin: 15,
  },
  images: {
    height: 86,
    width: 86,
    resizeMode: 'cover',
  },
});

export default ImagesPokemon;
