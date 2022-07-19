import * as React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import TextCustom from './TextCustom';

interface ICircleProps {
  name: string;
  base_stat: number;
  styleTextStat: StyleProp<TextStyle>;
  styleCircle: StyleProp<ViewStyle>;
}

const Circle = (props: ICircleProps) => {
  const {name, base_stat, styleTextStat, styleCircle} = props;

  return (
    <View style={[styles.containerBox, styleCircle]}>
      <TextCustom style={styleTextStat}>{base_stat}</TextCustom>
      <TextCustom style={styles.fontStat}>{name}</TextCustom>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 60,
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderWidth: 6,
    marginBottom: 20,
  },
  fontStat: {
    width: 50,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
  },
});

export default Circle;
