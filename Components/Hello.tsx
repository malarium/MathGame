import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Hello = () => {
  const greeting = 'MAth App';
  return (
    <View>
      <Text style={styles.textStyle}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'SuperMario256',
    fontSize: 40,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
});
