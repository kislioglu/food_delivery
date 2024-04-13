/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';
import SearchRecipe from './searchRecipe';
import GetSearchedRecipe from './getSearchedRecipe';

export default function Search() {
  return (
    <View>
      <SearchRecipe />
      <GetSearchedRecipe />
    </View>
  );
}
