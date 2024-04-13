/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {DataProvider} from './src/context/context';
import Homepage from './src/Homepage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/home/home';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <DataProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              // options={{title: 'Welcome'}}
            />
            <Stack.Screen
              name="Profile"
              component={Homepage}
              // options={{title: 'Welcome'}}
            />
          </Stack.Navigator>
        </DataProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});

export default App;
