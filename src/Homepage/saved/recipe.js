/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDataContext} from '../../context/context';
import {useNavigation} from '@react-navigation/native';

export default function Recipe() {
  const {addedToBookmark, setSelectedMealId, setAddedToBookmark} =
    useDataContext();
  const navigation = useNavigation();
  const showMealDetails = bookmarked => {
    setSelectedMealId({
      mealId: bookmarked.idMeal,
      mealName: bookmarked.strMeal,
    });
    navigation.navigate('MealDetails');
  };
  const handleRemoveBookmark = bookmarked => {
    const removeBookmark = addedToBookmark.filter(
      addedBMark => addedBMark.idMeal !== bookmarked.idMeal,
    );
    setAddedToBookmark(removeBookmark);
  };
  return (
    <View style={styles.bgColor}>
      <View style={styles.labelView}>
        <Text style={styles.headerLabel}>Saved Recipes</Text>
      </View>
      {addedToBookmark.length < 1 ? (
        <View style={styles.noneBookmarked}>
          <Image source={require('../../../assets/icons/empty.png')} />
          <Text style={styles.noRepiceText}> No recipe saved.</Text>
        </View>
      ) : (
        <ScrollView>
          {addedToBookmark
            ? addedToBookmark.map((bookmarked, index) => (
                <TouchableOpacity
                  onPress={() => showMealDetails(bookmarked)}
                  activeOpacity={0.8}
                  style={styles.recipePreview}
                  key={index}>
                  <View style={styles.borderStyle}>
                    <View style={styles.rateIconView}>
                      <Image
                        style={styles.rateIcon}
                        source={require('../../../assets/icons/star.png')}
                      />
                      <Text style={styles.rateText}>4,5</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleRemoveBookmark(bookmarked)}
                      activeOpacity={0.8}
                      style={styles.removeBookmarkViev}>
                      <Image
                        style={styles.removeBookmarkIcon}
                        source={require('../../../assets/icons/remove-bookmark.png')}
                      />
                    </TouchableOpacity>
                    <Image
                      style={styles.repiceImage}
                      source={{uri: bookmarked.strMealThumb}}
                    />
                    <View>
                      <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={styles.recipeNameLabel}>
                        How to make {bookmarked.strMeal}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            : null}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  noRepiceText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  noneBookmarked: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    width: '100%',
  },
  bgColor: {
    backgroundColor: '#fff',
    height: '100%',
  },
  labelView: {
    marginLeft: 10,
    paddingHorizontal: 10,
    width: '90%',
    height: 100,
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerLabel: {
    fontWeight: '700',
    fontSize: 20,
    color: '#303030',
  },
  borderStyle: {
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    borderColor: 'transparent',
    backgroundColor: '#F1F1F1',
  },
  recipePreview: {
    alignItems: 'center',
    marginBottom: 10,
  },
  rateIconView: {
    width: 60,
    height: 30,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    top: 10,
    left: 10,
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  rateIcon: {
    width: 20,
    height: 20,
  },
  removeBookmarkViev: {
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    top: 10,
    right: 10,
  },
  removeBookmarkIcon: {
    width: 20,
    height: 20,
  },
  rateText: {
    fontWeight: 'bold',
  },
  repiceImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
  recipeNameLabel: {
    color: '#303030',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
    paddingLeft: 5,
  },
});
