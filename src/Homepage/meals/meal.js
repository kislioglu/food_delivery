/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useDataContext} from '../../context/context';
import Loading from '../../loading/loading';
import {useNavigation} from '@react-navigation/native';
import {storeData} from '../../AsyncStorage/AsyncStorage';
import {useEffect} from 'react';

export default function Meal() {
  const {
    singleCategory,
    showMeals,
    setSelectedMealId,
    addedToBookmark,
    setAddedToBookmark,
    selectedCategoryName,
  } = useDataContext();
  const navigation = useNavigation();

  const handleMealOnPress = selectedMeal => {
    setSelectedMealId({
      mealId: selectedMeal.idMeal,
      mealName: selectedMeal.strMeal,
    });
    storeData('mealKey', selectedMeal.idMeal);
    navigation.navigate('MealDetails');
  };

  const handleBookmark = singleCat => {
    const addToBookmark = addedToBookmark.find(
      ab => ab.idMeal === singleCat.idMeal,
    );
    if (singleCat?.idMeal === addToBookmark?.idMeal) {
      setAddedToBookmark(prev =>
        prev.filter(item => item.idMeal !== singleCat.idMeal),
      );
    } else {
      setAddedToBookmark(prev => [...prev, singleCat]);
    }
    setSelectedMealId({
      mealId: singleCat.idMeal,
      mealName: singleCat.strMeal,
    });
  };

  return (
    <View style={styles.scrollView}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>
        {showMeals ? (
          singleCategory?.meals.length > 0 ? (
            singleCategory.meals.map((singleCat, index) => {
              const isAdded = addedToBookmark.some(
                ab => ab.idMeal === singleCat.idMeal,
              );
              return (
                <View
                  key={index}
                  style={[
                    styles.buttonContainer,
                    index < 1 && {marginLeft: 20},
                  ]}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => handleMealOnPress(singleCat)}
                    style={styles.button}>
                    <View style={styles.buttonContent}>
                      <View style={styles.mealButton}>
                        <Image
                          style={styles.recipeImg}
                          source={{uri: singleCat.strMealThumb}}
                        />
                        <Text
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          style={styles.buttonText}>
                          {singleCat.strMeal}
                        </Text>
                      </View>
                      <View style={styles.timesAndSave}>
                        <View>
                          <Text style={styles.timeLabel}>Time</Text>
                          <Text style={styles.requiredTime}>10 Mins</Text>
                        </View>
                        <View style={styles.bookmarkgImg}>
                          <TouchableOpacity
                            onPress={() => handleBookmark(singleCat)}>
                            <Image
                              style={{width: 20, height: 20}}
                              source={
                                isAdded
                                  ? require('../../../assets/icons/remove-bookmark.png')
                                  : require('../../../assets/icons/bookmark.png')
                              }
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <Loading />
          )
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    height: 220,
  },
  scroll: {
    width: '100%',
    height: 220,
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 160,
    height: 150,
    flexDirection: 'row',
    top: 50,
  },
  recipeImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#f1f1f1',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    maxWidth: 150,
    height: 20,
    marginTop: 10,
    paddingHorizontal: 2,
  },
  button: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    width: 150,
    height: 170,
  },
  mealButton: {
    alignItems: 'center',
    position: 'absolute',
    top: -50,
  },
  timesAndSave: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    width: '80%',
    height: 40,
    justifyContent: 'space-between',
  },
  bookmarkgImg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  timeLabel: {
    color: '#C1C1C1',
    fontWeight: 'bold',
    fontSize: 16,
  },
  requiredTime: {
    color: '#303030',
    fontWeight: '700',
    fontSize: 16,
    // paddingBottom: 10,
  },
});
