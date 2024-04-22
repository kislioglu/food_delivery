/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useDataContext } from '../../context/context';

export default function MealDetails() {
  const { mealDetail } = useDataContext();

  const ingredientIndexes = meal => {
    if (!meal) return [];
    let indexes = [];
    for (let i = 1; i <= 20; i++) {
      if (meal['strIngredient' + i]) {
        indexes.push(i);
      }
    }
    return indexes;
  };

  return (
    <View style={styles.mealView}>
      {mealDetail?.meals.map((meal, index) => (
        <View key={index}>
          <Text>{meal.strArea}</Text>
          {ingredientIndexes(meal).map(i => (
            <View key={i}>
              <Text>{meal['strIngredient' + i]}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mealView: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    elevation: 6,
    position: 'absolute',
  },
});
