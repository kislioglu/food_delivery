/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Categories from './categories/categories';
import Avatars from './avatar/avatar';
import Notifications from './notifications/notifications';
import SearchRecipe from './searchRecipe/searchRecipe';
import DailySentences from './dailySentences/dailySentences';
import Search from './searchRecipe';

function Homepage() {
  return (
    <View>
      <View style={styles.header}>
        <Avatars />
        {/* <Notifications /> */}
      </View>
      <DailySentences />
      <Search />
      {/* <Categories /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
  },
});

export default Homepage;
