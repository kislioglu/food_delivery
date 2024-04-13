/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const HomeScreen = ({navigation}) => {
  const opacity = useSharedValue(0);

  function name() {
    'worklet';

    opacity.value = withTiming(1, {duration: 1000}, () => {
      setTimeout(() => {
        runOnJS(navigation.navigate)('Profile');
      }, 4000);
    });
  }
  useEffect(() => {
    name();
    return () => {
      opacity.value = 0;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {opacity: opacity}]}>
        <Text style={styles.text}>Animating...</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default HomeScreen;
