/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import GroupedNotifications from './GroupedNotifications';

export default function AllNotifications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const jsonData = require('./notifications.json');
    setData(jsonData['notifications ']);
  }, []);

  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <View style={styles.widthandheight}>
      <ScrollView>
        <GroupedNotifications data={data} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
