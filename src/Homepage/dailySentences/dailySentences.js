/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {sentences} from './sentences';

export default function DailySentences() {
  const [randomSentence, setRandomSentence] = useState('');
  useEffect(() => {
    getRandomIndex();
  }, []);

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setRandomSentence(sentences[randomIndex].sentence);
  };

  return (
    <View style={styles.randomSentences}>
      {randomSentence !== '' && (
        <Text style={styles.sentenceText}>{randomSentence}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  randomSentences: {
    marginLeft: 10,
    paddingHorizontal: 10,
    width: '90%',
    height: 100,
    justifyContent: 'center',
  },
  sentenceText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#303030',
  },
});
