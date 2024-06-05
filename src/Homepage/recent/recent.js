/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useDataContext} from '../../context/context';
import {getData} from '../../AsyncStorage/AsyncStorage';
import {useNavigation} from '@react-navigation/native';

export default function Recent() {
  const fullMealDetail =
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
  const {selectedMealId, setSelectedMealId} = useDataContext();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const storedData = await getData('mealKey');
      if (storedData) {
        setData(prev => {
          if (prev.some(item => item === storedData)) {
            return prev;
          }
          return [...prev, storedData];
        });
      }
    };

    fetchData();
  }, [selectedMealId?.mealId]);

  useEffect(() => {
    const fetchAllData = async () => {
      const requests = data.map(async id => {
        const response = await fetch(`${fullMealDetail}${id}`);
        const result = await response.json();
        return result.meals[0];
      });
      const allResults = await Promise.all(requests);
      setShowData(allResults);
    };

    fetchAllData();
  }, [data]);

  const handleShowMealDetail = mealDetail => {
    setSelectedMealId({
      mealId: mealDetail.idMeal,
      mealName: mealDetail.strMeal,
    });
    navigation.navigate('MealDetails');
  };

  return (
    <View style={styles.recentView}>
      <Text style={styles.captionLabel}>Recent Foods</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {showData.length > 0
          ? [...showData].reverse().map((mealDetails, index) => (
              <TouchableOpacity
                onPress={() => handleShowMealDetail(mealDetails)}
                activeOpacity={0.9}
                key={index}
                style={[
                  styles.recentFoodView,
                  index < 1 ? {marginLeft: 20} : null,
                ]}>
                <Image
                  style={styles.mealImg}
                  source={{uri: mealDetails.strMealThumb}}
                />
                <Text
                  style={styles.mealNameText}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  key={index}>
                  {mealDetails.strMeal}
                </Text>
              </TouchableOpacity>
            ))
          : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  recentView: {
    width: '100%',
    height: 240,
  },
  captionLabel: {
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 24,
    color: '#303030',
    fontWeight: 'bold',
  },
  recentFoodView: {
    width: 124,
    height: 191,
    marginRight: 15,
  },
  mealImg: {
    width: 124,
    height: 124,
    borderRadius: 15,
  },
  mealNameText: {
    fontSize: 16,
    fontWeight: '500',
    maxWidth: 150,
    height: 20,
    marginTop: 10,
    paddingHorizontal: 2,
  },
});
