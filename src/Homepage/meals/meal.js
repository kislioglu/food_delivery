/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useDataContext} from '../../context/context';
import Loading from '../../loading/loading';
import MealDetails from './mealDetails';

export default function Meal() {
  const {singleCategory, showMeals, setSelectedMeal} = useDataContext();
  const [showMealDetail, setShowMealDetail] = useState(false);

  const handleMealOnPress = selectedMeal => {
    setSelectedMeal(selectedMeal);
    setShowMealDetail(true);
  };
  return (
    <View style={styles.scrollView}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContentContainer}>
        {showMeals ? (
          singleCategory?.meals.length > 0 ? (
            singleCategory.meals.map((singleCat, index) => (
              <View
                key={index}
                style={[styles.buttonContainer, index < 2 && {marginTop: 30}]}>
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
                        <TouchableOpacity>
                          <Image
                            source={require('../../../assets/icons/bookmark.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Loading />
          )
        ) : null}
      </ScrollView>
      {showMealDetail ? <MealDetails /> : null}
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
    height: '60%',
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
    marginBottom: 100,
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
    padding: 10,
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
