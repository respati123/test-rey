import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface ICardProps {
  onPress?: () => void;
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
}

const Card = (props: ICardProps) => {
  const {onPress, children, style} = props;
  return (
    <TouchableOpacity onPress={onPress} style={{flex: 1}} activeOpacity={0.9}>
      <View style={[styles.containerCard, style]}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: 'white',
  },
});

export default Card;
