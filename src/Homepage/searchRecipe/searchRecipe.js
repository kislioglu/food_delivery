/* eslint-disable prettier/prettier */
import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useDataContext} from '../../context/context';

export default function SearchRecipe() {
  const {setMealName, mealName} = useDataContext();

  return (
    <View style={styles.searchArea}>
      <View style={styles.searchIconArea}>
        <Image
          style={styles.searchIcon}
          source={require('../../../assets/icons/search.png')}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder="Search for recipe..."
          placeholderTextColor={'#969696'}
          value={mealName}
          onChangeText={text => setMealName(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchArea: {
    width: '90%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#969696',
  },
  textInput: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    paddingHorizontal: 10,
    fontWeight: '600',
    fontSize: 14,
  },
  searchIconArea: {
    width: '10%',
    left: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: '#969696',
  },
});
