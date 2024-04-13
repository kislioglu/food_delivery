/* eslint-disable prettier/prettier */
import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useDataContext} from '../../context/context';

export default function SearchRecipe() {
  const {setMealName, mealName} = useDataContext();

  return (
    <View style={styles.searchArea}>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder="Search for recipe..."
          placeholderTextColor={'#000'}
          value={mealName}
          onChangeText={text => setMealName(text)}
        />
        <Image
          style={styles.searchIcon}
          source={require('../../../assets/icons/search.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchArea: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  textInput: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    width: '90%',
    // backgroundColor: 'red',
    height: 40,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontWeight: '600',
    fontSize: 14,
  },
  searchIcon: {
    left: 5,
    width: 24,
    height: 24,
  },
});
