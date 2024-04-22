/* eslint-disable prettier/prettier */
import React, {createContext, useContext, useEffect, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const [showMeals, setShowMeals] = useState(false);
  const [singleCategory, setSingleCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedMeal, setSelectedMeal] = useState();
  const [mealDetail, setMealDetail] = useState();
  const [mealData, setMealData] = useState(null);
  const [mealName, setMealName] = useState();
  const categoriesUrl = 'https://themealdb.com/api/json/v1/1/categories.php';
  const mealNameUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const fullMealDetail = 'www.themealdb.com/api/json/v1/1/lookup.php?i=';

  useEffect(() => {
    if (mealName === '') {
      setMealName();
    } else {
      fetchMealData();
    }
  }, [mealName]);

  useEffect(() => {
    fetchFullMealDetail();
  }, [selectedMeal]);

  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    if (selectedCategory) {
      fetchSingleCategory();
    }
  }, [selectedCategory]);
  const fetchCategories = async () => {
    try {
      const response = await fetch(categoriesUrl);
      const data = await response.json();
      if (data.categories) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.error('Err', error);
    }
  };
  const fetchMealData = async () => {
    try {
      const response = await fetch(`${mealNameUrl + mealName}`);
      const data = await response.json();
      setMealData(data);
    } catch (error) {
      console.error('Err:', error);
    }
  };
  const fetchSingleCategory = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`,
      );
      const data = await response.json();
      setSingleCategory(data);
    } catch (error) {
      console.error('Err:', error);
    }
  };
  const fetchFullMealDetail = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`,
      );
      const data = await response.json();
      setMealDetail(data);
    } catch (error) {
      console.error('Err:', error);
    }
  };
  const contextValues = {
    categories,
    setMealName,
    mealName,
    mealData,
    setSelectedCategory,
    selectedCategory,
    singleCategory,
    showMeals,
    setShowMeals,
    selectedMeal,
    setSelectedMeal,
    mealDetail,
  };

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext hook must be used within a DataProvider');
  }
  return context;
};
