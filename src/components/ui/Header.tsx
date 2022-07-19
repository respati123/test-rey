import {BarsHeader, LogoPokemon} from '../../assets/images/index';
import * as React from 'react';
import {View, StyleSheet, Image, StyleProp, ViewStyle} from 'react-native';
interface IHeaderProps {
  style?: StyleProp<ViewStyle>;
}
const Header = (props: IHeaderProps) => {
  const {style} = props;
  return (
    <View style={[styles.containerHeader, style]}>
      <Image source={LogoPokemon} />
      <Image source={BarsHeader} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
