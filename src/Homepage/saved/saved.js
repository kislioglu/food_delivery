/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import RecipeVideo from './savedRecipeVideo';
import Recipe from './recipe';

export default function Saved() {
  return (
    <View style={styles.bgColor}>
      <Recipe />
      <RecipeVideo />
    </View>
  );
}

const styles = StyleSheet.create({
  bgColor: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
