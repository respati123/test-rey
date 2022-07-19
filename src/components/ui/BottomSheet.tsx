import React, {useCallback, useEffect, useImperativeHandle} from 'react';
import {
  ActivityIndicatorBase,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withSpring,
  Extrapolate,
  SharedValue,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

type BottomSheetProps = {
  children: React.ReactNode;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  (props, ref) => {
    const {children} = props;
    const translationY = useSharedValue(0);
    const context = useSharedValue({y: 0});
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
      'worklet';

      active.value = destination !== 0;

      translationY.value = withSpring(destination, {damping: 50});
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [
      scrollTo,
      isActive,
    ]);

    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = {y: translationY.value};
      })
      .onUpdate(event => {
        console.log(event.translationY);

        translationY.value = event.translationY + context.value.y;
        translationY.value = Math.max(translationY.value, -SCREEN_HEIGHT / 1.2);
      })
      .onEnd(() => {
        if (translationY.value > -SCREEN_HEIGHT / 1.4) {
          scrollTo(0);
        } else if (translationY.value < -SCREEN_HEIGHT / 1) {
          scrollTo(-SCREEN_HEIGHT / 1.2);
        }
      });

    useEffect(() => {
      scrollTo(-SCREEN_HEIGHT / 1.2);
    }, []);

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translationY.value,
        [-SCREEN_HEIGHT + 50, -SCREEN_HEIGHT],
        [25, 5],
        Extrapolate.CLAMP,
      );
      return {
        borderRadius,
        transform: [{translateY: translationY.value}],
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
          <View style={styles.line} />
          {children}
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 8,
    borderRadius: 2,
  },
});

export default BottomSheet;
