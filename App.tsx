/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Hello} from './Components/Hello';
import {AppColors} from './Utilities/AppColors';

console.log(Colors);

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar hidden={true} />
      <Hello />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: AppColors.Red,
  },
});

export default App;
