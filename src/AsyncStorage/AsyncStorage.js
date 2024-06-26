/* eslint-disable prettier/prettier */
// import AsyncStorage from '@react-native-async-storage/async-storage';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Veri saklanırken bir hata oluştu:', error);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      console.log('Belirtilen anahtar için veri bulunamadı.');
    }
  } catch (error) {
    console.error('Veri getirilirken bir hata oluştu:', error);
  }
};
