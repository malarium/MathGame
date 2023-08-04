import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TaskContext} from '../Utilities/Contexts';

export const Task = () => {
  const taskValue = React.useContext(TaskContext);

  return (
    <View>
      <Text style={styles.textStyle}>{taskValue?.task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'SuperMario256',
    fontSize: 80,
    color: '#000',
    textAlign: 'center',
  },
});
