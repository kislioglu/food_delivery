/* eslint-disable prettier/prettier */
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
