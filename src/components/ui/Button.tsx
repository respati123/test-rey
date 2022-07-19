import * as React from 'react';
import {
  ButtonProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface ButtonCustomProps extends ButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

const ButtonCustom = (props: ButtonCustomProps) => {
  const {onPress, title, style, styleText} = props;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[style, defaultProps.style]}>
        <Text style={[styleText, defaultProps.styleText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const defaultProps = StyleSheet.create({
  styleText: {
    color: '#fff',
    lineHeight: 30,
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  style: {
    paddingHorizontal: 40,
    paddingVertical: 13,
    backgroundColor: '#E6AB09',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

ButtonCustom.defaultProps = defaultProps;

export default ButtonCustom;
