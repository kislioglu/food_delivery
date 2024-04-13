/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Avatars() {
  const myAvatars = {
    male: require('../../../assets/avatars/male.jpg'),
    female: require('../../../assets/avatars/female.jpg'),
  };

  const [avatar, setAvatar] = useState('male');
  const [avatarView, setAvatarView] = useState(false);

  const chooseAvatarHandle = () => {
    setAvatarView(!avatarView);
  };

  const handleImageSelection = imageName => {
    setAvatar(imageName);
    setAvatarView(false);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={chooseAvatarHandle}
        style={styles.selectAvatar}>
        <Image style={styles.selectedAvatar} source={myAvatars[avatar]} />
      </TouchableOpacity>

      <View style={styles.avatarsPosition}>
        {avatarView && (
          <View style={styles.allAvatars}>
            <View style={styles.border} />
            <TouchableOpacity onPress={() => handleImageSelection('male')}>
              <Image
                style={styles.avatar}
                rounded
                source={require('../../../assets/avatars/male.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImageSelection('female')}>
              <Image
                style={styles.avatar}
                rounded
                source={require('../../../assets/avatars/female.jpg')}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectAvatar: {
    backgroundColor: 'grey',
    marginLeft: 5,
    marginTop: 5,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  selectedAvatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  avatarsPosition: {
    position: 'absolute',
    marginTop: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  allAvatars: {
    width: 130,
    height: 50,
    left: 55,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  border: {
    height: 40,
    marginRight: 5,
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: 'black',
  },
});
