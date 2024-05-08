/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Categories from './categories/categories';
import DailySentences from './dailySentences/dailySentences';
import Search from './searchRecipe';
import Meal from './meals/meal';
import Recent from './recent/recent';

function Homepage() {
  return (
    <View style={styles.content}>
      <ScrollView>
        <DailySentences />
        <Search />
        <Categories />
        <Meal />
        <Recent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default Homepage;
