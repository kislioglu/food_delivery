/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from '../Homepage';
import {Image, View, Text, StyleSheet} from 'react-native';
import UnreadNotifications from '../Homepage/notifications/UnreadNotifications';
import Profile from '../Homepage/profile/profile';
import Saved from '../Homepage/saved/saved';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealDetails from '../Homepage/meals/mealDetails';
import {useDataContext} from '../context/context';
import SavedMealDetails from '../Homepage/meals/savedMealDetails';
import Recipe from '../Homepage/saved/recipe';
import RecipeVideo from '../Homepage/saved/savedRecipeVideo';
import AllNotifications from '../Homepage/notifications/AllNotifications';
import ReadNotifications from '../Homepage/notifications/ReadNotifications';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const TopTab = createMaterialTopTabNavigator();

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

function SavedTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="RecipeVideo"
        component={RecipeVideo}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View style={styles.tabScreen}>
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Recipe Video
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Recipe"
        component={Recipe}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View style={styles.tabScreen}>
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Recipe
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function NotificationsTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="AllNotifications"
        component={AllNotifications}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View style={styles.tabScreen}>
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                All
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UnreadNotifications"
        component={UnreadNotifications}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View style={styles.tabScreen}>
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Unread
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ReadNotifications"
        component={ReadNotifications}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View style={styles.tabScreen}>
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Read
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
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
          initialRouteName="Saved"
          name="SavedStack"
          component={SavedTabs}
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
          component={NotificationsTabs}
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
