import * as React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import TextCustom from './TextCustom';

interface IBadge {
  label: string;
  style: StyleProp<ViewStyle>;
}

const Badge = (props: IBadge) => {
  const {label, style} = props;
  return (
    <View style={style}>
      <TextCustom
        style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: '700',
          textTransform: 'capitalize',
        }}>
        {label}
      </TextCustom>
    </View>
  );
};

export default Badge;
