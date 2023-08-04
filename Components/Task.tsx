import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TaskContext} from '../Utilities/Contexts';

export const Task = () => {
  const taskValue = React.useContext(TaskContext);

  const [taskTxt, setTaskTxt] = useState('');

  useEffect(() => {
    if (taskValue?.task?.length === 2) {
      setTaskTxt(`${taskValue.task[0]} x ${taskValue.task[1]}`);
    }
  }, [taskValue]);

  return (
    <View>
      <Text style={styles.textStyle}>{taskTxt}</Text>
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
