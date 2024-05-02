/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from '../Homepage';
import {Image, View, Text, StyleSheet} from 'react-native';
import Notifications from '../Homepage/notifications/notifications';
import Profile from '../Homepage/profile/profile';
import Saved from '../Homepage/saved/saved';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealDetails from '../Homepage/meals/mealDetails';
import {useDataContext} from '../context/context';
import SavedMealDetails from '../Homepage/meals/savedMealDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  const {mealDetail} = useDataContext();
  const [headerMealName, setHeaderMealName] = useState();
  useEffect(() => {
    setHeaderMealName(mealDetail?.meals[0].strMeal);
  }, [mealDetail?.meals]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetails}
        options={{headerTitle: headerMealName}}
      />
    </Stack.Navigator>
  );
}
function SavedStack() {
  const {mealDetail} = useDataContext();
  const [headerMealName, setHeaderMealName] = useState();
  useEffect(() => {
    setHeaderMealName(mealDetail?.meals[0].strMeal);
  }, [mealDetail?.meals]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Saved"
        component={Saved}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SavedMealDetails"
        component={SavedMealDetails}
        options={{headerTitle: headerMealName}}
      />
    </Stack.Navigator>
  );
}

export default function NavRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeStack"
          component={MainStack}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <View style={styles.tabScreen}>
                <Image
                  source={require('../../assets/icons/home.png')}
                  resizeMode="contain"
                  style={
                    (styles.tabScreenImg,
                    {tintColor: focused ? '#e32f45' : '#748c94'})
                  }
                />
                <Text
                  style={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SavedStack"
          component={SavedStack}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <View style={styles.tabScreen}>
                <Image
                  source={require('../../assets/icons/bookmark.png')}
                  resizeMode="contain"
                  style={
                    (styles.tabScreenImg,
                    {tintColor: focused ? '#e32f45' : '#748c94'})
                  }
                />
                <Text
                  style={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  Saved
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <View style={styles.tabScreen}>
                <Image
                  source={require('../../assets/icons/notifications.png')}
                  resizeMode="contain"
                  style={
                    (styles.tabScreenImg,
                    {tintColor: focused ? '#e32f45' : '#748c94'})
                  }
                />
                <Text
                  style={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  Notifications
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <View style={styles.tabScreen}>
                <Image
                  source={require('../../assets/icons/profile.png')}
                  resizeMode="contain"
                  style={
                    (styles.tabScreenImg,
                    {tintColor: focused ? '#e32f45' : '#748c94'})
                  }
                />
                <Text
                  style={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  tabScreenImg: {
    width: 25,
    height: 25,
  },
});
