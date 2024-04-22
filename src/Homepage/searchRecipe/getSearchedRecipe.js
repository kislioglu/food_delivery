/* eslint-disable prettier/prettier */
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {useDataContext} from '../../context/context';
import {useState} from 'react';

export default function GetSearchedRecipe() {
  const {mealData, mealName} = useDataContext();
  const [isSearched, setIsSearched] = useState(false);

  const scrollHandle = () => {
    if (mealName) {
      setIsSearched(true);
    } else {
      setIsSearched(false);
    }
  };

  return (
    <View style={styles.scrollView}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContentContainer}>
        {mealData?.meals?.map((md, index) => (
          <View key={index} style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <View style={styles.buttonContent}>
                {/* <Text style={styles.buttonText}>{md?.srtArea}</Text> */}
                <Image
                  style={styles.recipeImg}
                  source={{uri: md.strMealThumb}}
                />
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={styles.buttonText}>
                  {md?.strMeal}
                </Text>
              </View>
            </TouchableOpacity>

            {/* {(index + 1) % 2 === 0 ||
            index === mealData.meals.length - 1 ? null : (
              <View style={styles.separator}></View>
            )} */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    flexGrow: 1,
  },
  scroll: {
    width: '100%',
  },
  scrollContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonContainer: {
    width: '46%',
    height: 150,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 200,
    padding: 10,
    borderRadius: 5,
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    maxWidth: 150,
    height: 20,
    marginTop: 10,
  },
  recipeImg: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
  // separator: {
  //   width: '100%',
  //   height: 1,
  // },
});
