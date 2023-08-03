import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Hello = () => {
  const greeting = 'App runs!';
  return (
    <View>
      <Text style={styles.textStyle}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Super Mario Bros.',
    fontSize: 40,
  },
});
