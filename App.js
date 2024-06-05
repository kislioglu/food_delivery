/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DataProvider} from './src/context/context';
import NavRouter from './src/navigator/navRouter';
import {enableFreeze, enableScreens} from 'react-native-screens';
enableFreeze(true);
enableScreens(false);

function App() {
  return (
    <View style={styles.container}>
      <DataProvider>
        <NavRouter />
      </DataProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
