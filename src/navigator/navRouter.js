/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from '../Homepage';
import {Image, View, Text, StyleSheet} from 'react-native';
import Notifications from '../Homepage/notifications/notifications';
import Profile from '../Homepage/profile/profile';
import Saved from '../Homepage/saved/saved';
const Tab = createBottomTabNavigator();
export default function NavRouter() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Homepage}
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
        name="Saved"
        component={Saved}
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
