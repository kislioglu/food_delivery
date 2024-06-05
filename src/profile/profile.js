/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {useDataContext} from '../context/context';
export default function Profile() {
  const {addedToBookmark} = useDataContext();
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
      <View style={styles.labelView}>
        <Text style={styles.headerLabel}>My Profile</Text>
      </View>
      <View style={styles.profileImgView}>
        <Image
          style={styles.profileImg}
          source={require('../../assets/avatars/avatar.png')}
        />
      </View>
      <View style={styles.informations}>
        <Text style={styles.nameSurname}>Gorkem Kislioglu</Text>
        <Text style={styles.introductionText}>
          Hello world I'm Gorkem Kislioglu. I'm from Turkey{' '}
          <Image
            style={styles.flagImg}
            source={require('../../assets/icons/turkeyFlag.png')}
          />
          . I love cooking so much!
        </Text>
      </View>
      <View style={styles.statsView}>
        <View style={styles.eachStat}>
          <Text style={styles.statName}>Recipe</Text>
          <Text style={styles.statValue}>{addedToBookmark.length}</Text>
        </View>
        <View style={styles.eachStat}>
          <Text style={styles.statName}>Videos</Text>
          <Text style={styles.statValue}>{addedToBookmark.length}</Text>
        </View>
        <View style={styles.eachStat}>
          <Text style={styles.statName}>Followers</Text>
          <Text style={styles.statValue}>14k</Text>
        </View>
        <View style={styles.eachStat}>
          <Text style={styles.statName}>Following</Text>
          <Text style={styles.statValue}>120</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelView: {
    marginLeft: 10,
    paddingHorizontal: 10,
    width: '90%',
    height: 100,
    justifyContent: 'center',
  },
  headerLabel: {
    fontWeight: '700',
    fontSize: 20,
    color: '#303030',
  },
  profileImgView: {
    width: 100,
    height: 100,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginHorizontal: 20,
  },
  informations: {
    gap: 10,
    marginTop: 20,
    width: '80%',
    marginLeft: 20,
  },
  nameSurname: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  introductionText: {
    width: '100%',
    fontSize: 16,
    color: '#a9a9a9',
  },
  flagImg: {
    width: 20,
    height: 14,
  },
  statsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  eachStat: {
    width: 80,
    height: 80,
    alignItems: 'center',
    gap: 5,
  },
  statName: {
    fontSize: 14,
    color: '#a9a9a9',
  },
  statValue: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
