/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CalculateTimeDiff from './CalculateTimeDiff';
import {Image} from 'react-native';

function groupByTimeDifference(data) {
  const grouped = data.reduce((acc, item) => {
    const timeDiff = CalculateTimeDiff({item: item.date});
    if (!acc[timeDiff]) {
      acc[timeDiff] = [];
    }
    acc[timeDiff].push(item);
    return acc;
  }, {});
  return grouped;
}

export default function GroupedNotifications({data}) {
  const groupedData = groupByTimeDifference(data);

  return (
    <View style={styles.widthandheight}>
      <View style={styles.captionView}>
        <Text style={styles.headerCaption}>Notifications</Text>
      </View>
      {Object.keys(groupedData).map((timeDiff, index) => (
        <View key={index}>
          <Text style={styles.header}>{timeDiff}</Text>
          {groupedData[timeDiff].map(item => {
            return (
              <View style={styles.notificationView} key={item.id}>
                <View style={styles.paperImgView}>
                  <Image
                    style={styles.paperImg}
                    source={require('../../assets/icons/paper.png')}
                  />
                </View>
                <View style={styles.textView}>
                  {!item.isReaded ? <View style={styles.unReadLight} /> : null}
                  <Text style={styles.captionText}>{item.caption}</Text>
                  <Text style={styles.contentText}>
                    {item.notificationContent}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      ))}
      <Text style={styles.doneText}>You're all set!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  widthandheight: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  captionView: {
    marginLeft: 10,
    paddingHorizontal: 10,
    width: '90%',
    height: 80,
    justifyContent: 'center',
  },
  headerCaption: {
    fontWeight: '700',
    fontSize: 20,
    color: '#303030',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 20,
  },
  notificationView: {
    backgroundColor: '#F1F1F1',
    marginBottom: 10,
    marginHorizontal: '20',
    height: 82,
    flexDirection: 'row',
    borderRadius: 20,
  },
  paperImgView: {
    marginHorizontal: 10,
    marginTop: 10,
    width: 36,
    height: 36,
    backgroundColor: '#CEECD7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  paperImg: {
    width: 18,
    height: 18,
  },
  textView: {
    width: 290,
    gap: 5,
    justifyContent: 'center',
  },
  captionText: {
    fontWeight: '800',
    fontSize: 16,
  },
  contentText: {
    color: '#A9A9A9',
    fontSize: 16,
  },
  doneText: {
    color: '#A9A9A9',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
  },
  unReadLight: {
    width: 10,
    height: 10,
    backgroundColor: '#E23E3E',
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 15,
  },
});
