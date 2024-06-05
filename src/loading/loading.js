/* eslint-disable prettier/prettier */
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator />
      <Text style={styles.label}>Hold on for a second please.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    // width: '100%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    marginTop:10,
  },
});
