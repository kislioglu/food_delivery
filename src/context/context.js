/* eslint-disable prettier/prettier */
import React, {createContext, useContext, useEffect, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [addedToBookmark, setAddedToBookmark] = useState([]);
  const [savedMealDetails, setSavedMealDetails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showMeals, setShowMeals] = useState(false);
  const [singleCategory, setSingleCategory] = useState();
  const [selectedCategoryName, setselectedCategoryName] = useState();
  const [selectedMealId, setSelectedMealId] = useState();
  const [mealDetail, setMealDetail] = useState();
  const [mealData, setMealData] = useState(null);
  const [mealName, setMealName] = useState();
  const categoriesUrl = 'https://themealdb.com/api/json/v1/1/categories.php';
  const mealNameUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const fullMealDetail =
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

  useEffect(() => {
    if (mealName === '') {
      setMealName();
    } else {
      fetchMealData();
    }
  }, [mealName]);

  useEffect(() => {
    if (selectedMealId?.mealId) {
      fetchFullMealDetail();
    }
  }, [selectedMealId?.mealId]);
  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    if (selectedCategoryName) {
      fetchSingleCategory();
    }
  }, [selectedCategoryName]);
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
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategoryName}`,
      );
      const data = await response.json();
      setSingleCategory(data);
    } catch (error) {
      console.error('Err:', error);
    }
  };
  const fetchFullMealDetail = async () => {
    try {
      const response = await fetch(`${fullMealDetail + selectedMealId.mealId}`);
      const data = await response.json();
      setMealDetail(data);
    } catch (error) {
      console.error('Err:', error);
    }
  };
  // console.log(mealDetail)
  const contextValues = {
    categories,
    setMealName,
    mealName,
    mealData,
    setselectedCategoryName,
    selectedCategoryName,
    singleCategory,
    showMeals,
    setShowMeals,
    selectedMealId,
    setSelectedMealId,
    mealDetail,
    addedToBookmark,
    setAddedToBookmark,
    savedMealDetails,
    setSavedMealDetails,
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
