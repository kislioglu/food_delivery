/* eslint-disable prettier/prettier */
import React, {createContext, useContext, useEffect, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const [mealData, setMealData] = useState(null);
  const [mealName, setMealName] = useState();
  const categoriesUrl = 'https://themealdb.com/api/json/v1/1/categories.php';
  // const searchMealsUrl = 'www.themealdb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    if (mealName === '') {
      setMealName();
    } else {
      fetchMealData();
    }
  }, [mealName]);

  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const response = await fetch(categoriesUrl);
      const data = await response.json();
      if (data.categories) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  const fetchMealData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`,
      );
      const data = await response.json();
      setMealData(data);
    } catch (error) {
      console.error('Hata:', error);
    }
  };
  const contextValues = {
    categories,
    setMealName,
    mealName,
    mealData,
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
