import React, {ReactNode} from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

interface TextCustomProps extends TextProps {
  children: ReactNode;
}

const TextCustom = (props: TextCustomProps) => {
  const {style, children} = props;
  return <Text style={[defaultPropsStyle, style]}>{children}</Text>;
};

const defaultPropsStyle: StyleProp<TextStyle> = {
  fontFamily: 'PoppinsBold',
};

export default TextCustom;
