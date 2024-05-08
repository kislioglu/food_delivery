/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useDataContext} from '../../context/context';
import {useState} from 'react';
import Loading from '../../loading/loading';

export default function Categories() {
  const {categories, setselectedCategoryName, setShowMeals} = useDataContext();
  const [isActive, setIsActive] = useState(false);

  const handlePress = category => {
    setIsActive(prev => {
      if (prev === category.idCategory) {
        setShowMeals(false);
        return null;
      }
      setShowMeals(true);

      return category.idCategory;
    });
    setselectedCategoryName(category.strCategory);
  };
  return (
    <View style={styles.categories}>
      <Text style={styles.categoriesLabel}>Categories</Text>
      {categories.length < 1 ? (
        <View>
          <Loading />
        </View>
      ) : (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.categoriesScroll}>
          {categories.map(category => (
            <View style={styles.categoriesView} key={category.idCategory}>
              <TouchableOpacity
                onPress={() => handlePress(category)}
                style={styles.categoryButton}>
                <Text
                  style={[
                    styles.categoryText,
                    isActive === category.idCategory
                      ? styles.activeCategory
                      : null,
                  ]}>
                  {category.strCategory}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    width: '100%',
    height: 100,
  },
  categoriesLabel: {
    marginLeft: 20,
    fontSize: 24,
    color: '#303030',
    fontWeight: 'bold',
  },
  categoriesScroll: {
    flexDirection: 'row',
    height: 80,
  },
  categoriesView: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  categoryButton: {
    padding: 10,
  },
  categoryText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#ee8b8b',
  },
  activeCategory: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e23e3e',
    color: '#fff',
  },
});
