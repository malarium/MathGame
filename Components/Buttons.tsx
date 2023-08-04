import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TaskContext} from '../Utilities/Contexts';

interface IButtons {
  regenerateTask: () => void;
}

export const Buttons = (props: IButtons) => {
  const [result, setResult] = useState('?');
  const countArr = Array(10).fill('');
  const taskValue = React.useContext(TaskContext);
  const buttonClicked = (value: number) => {
    if (result.length > 4) {
      return;
    }
    const res = result === '?' ? `${value}` : result + `${value}`;
    setResult(res);
  };
  const clearInput = () => {
    setResult('?');
  };
  const checkResult = () => {
    if (taskValue?.task?.length === 2) {
      if (parseInt(result, 10) === taskValue?.task[0] * taskValue?.task[1]) {
        props.regenerateTask();
      } else {
        clearInput();
      }
    }
  };
  return (
    <View style={styles.boxWrapper}>
      <Text style={styles.resultStyle}>{result}</Text>
      <View style={styles.buttonsWrapper}>
        {countArr.map((_e, i) => (
          <Pressable
            android_ripple={{color: '#fff'}}
            style={styles.button}
            key={i}
            onPress={() => buttonClicked(i)}>
            <Text style={styles.buttonText}>{i}</Text>
          </Pressable>
        ))}
        <Pressable
          onPress={clearInput}
          style={styles.button}
          android_ripple={{color: '#fff'}}>
          <Text style={styles.buttonText}>DEL</Text>
        </Pressable>
        <Pressable
          onPress={checkResult}
          style={styles.button}
          android_ripple={{color: '#fff'}}>
          <Text style={styles.buttonText}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SuperMario256',
  },
  buttonsWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    margin: 5,
  },
  buttonText: {
    fontFamily: 'SuperMario256',
    textAlign: 'center',
    fontSize: 50,
  },
  resultStyle: {
    fontFamily: 'SuperMario256',
    fontSize: 70,
    color: '#000',
    textAlign: 'center',
    margin: 10,
  },
  buttonsStyle: {
    fontFamily: 'SuperMario256',
    fontSize: 40,
  },
});
