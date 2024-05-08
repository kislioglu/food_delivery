/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import {useDataContext} from '../../context/context';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function MealDetails() {
  const {mealDetail} = useDataContext();

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

  const getYoutubeVideoId = url => {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };

  return (
    <ScrollView style={styles.mealView}>
      {mealDetail?.meals.map((meal, index) => (
        <View style={styles.mealDetail} key={index}>
          <View>
            <Text style={styles.mealCaption}>How to make {meal.strMeal}</Text>
          </View>
          {meal.strYoutube && (
            <View style={styles.ytVideoView}>
              <YoutubeIframe
                height={300}
                style={styles.ytVideoIframe}
                videoId={getYoutubeVideoId(meal.strYoutube)}
              />
            </View>
          )}
          <View>
            <View style={styles.reviewStyle}>
              <Image
                style={styles.starIcon}
                source={require('../../../assets/icons/star.png')}
              />
              <Text style={styles.rateText}>4.5</Text>
              <Text style={styles.reviewText}>(300 Revievs)</Text>
              <View style={styles.recipeArea}>
                <Image
                  style={styles.locationIcon}
                  source={require('../../../assets/icons/location.png')}
                />
                <Text style={styles.recipeText}>{meal.strArea}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.ingredientsLabel}>Ingredients</Text>
            {/* <Text>{meal['strIngredient' + i].length}</Text> */}
          </View>
          {ingredientIndexes(meal).map(i => (
            <View style={styles.ingredientIndexesStyle} key={i}>
              <View style={styles.ingredientIndexesView}>
                <Text style={styles.ingredientName}>
                  {meal['strIngredient' + i]}
                </Text>
                <Text style={styles.ingredientCount}>
                  {meal['strMeasure' + i]}
                </Text>
              </View>
            </View>
          ))}
          <View style={styles.instructionView}>
            <Text style={styles.instructionCaption}>Instruction</Text>

            {meal.strInstructions.split('\r\n').map((instruction, index) => (
              <View style={styles.innerInstructionView} key={index}>
                {index !== meal.strInstructions.split('\r\n').length && (
                  <View style={styles.circle} />
                )}
                <View style={{width: 330}}>
                  <Text style={styles.instructionText}>
                    {instruction.replace(/^\d+\.\s*/, '')}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mealView: {
    height: '100%',
    backgroundColor: '#fff',
  },
  mealDetail: {
    marginLeft: 20,
  },
  mealCaption: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: 'bold',
    width: '80%',
  },
  ytVideoView: {
    marginRight: 20,
    marginTop: 15,
    height: 200,
  },
  ytVideoIframe: {
    borderWidth: 3,
    borderRadius: 10,
  },
  reviewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    gap: 10,
  },
  rateText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reviewText: {
    color: '#969696',
    fontSize: 16,
  },
  recipeArea: {
    position: 'absolute',
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  ingredientIndexesStyle: {
    width: '100%',
    height: 'auto',
  },
  ingredientIndexesView: {
    flexDirection: 'row',
    width: 350,
    height: 76,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  ingredientsLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  ingredientName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  ingredientCount: {
    fontSize: 16,
    color: '#A9A9A9',
  },
  instructionView: {
    width: 350,
    borderRadius: 15,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    marginBottom: 10,
  },
  innerInstructionView: {
    gap: 5,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: 350,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginLeft: 5,
  },
  instructionText: {
    fontWeight: '600',
    fontSize: 14,
  },
  instructionCaption: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
});
