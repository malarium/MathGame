import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Piniata = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Piniata</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'SuperMario256',
    fontSize: 40,
    color: '#000',
    textAlign: 'center',
  },
});
