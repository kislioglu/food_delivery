/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {useDataContext} from '../../context/context';

export default function Categories() {
  const {categories} = useDataContext();

  return (
    <ScrollView>
      {categories.map(category => (
        <View key={category.idCategory} style={{marginBottom: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            {category.strCategory}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
