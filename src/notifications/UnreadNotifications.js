/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import GroupedNotifications from './GroupedNotifications';

export default function AllNotifications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const jsonData = require('./notifications.json');
    setData(jsonData['notifications ']);
  }, []);
  const readNotifications = data.filter(item => !item.isReaded);

  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <View>
      <ScrollView>
        <GroupedNotifications data={readNotifications} />
      </ScrollView>
    </View>
  );
}
