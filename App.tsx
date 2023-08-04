import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {AppColors} from './Utilities/AppColors';
import {Buttons} from './Components/Buttons';
import {Piniata} from './Components/Piniata';
import {Task} from './Components/Task';
import {TaskContext} from './Utilities/Contexts';
import {generateMathTask} from './Functionality/GenerateMathTask';

function App(): JSX.Element {
  const [task, setTask] = useState<number[] | null>(null);

  const setNewTask = (newTask: number[]) => {
    setTask(newTask);
  };

  useEffect(() => {
    const mathTask = generateMathTask();
    setNewTask(mathTask);
  }, []);

  const regenerateTask = () => {
    const mathTask = generateMathTask();
    setNewTask(mathTask);
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar hidden={true} />
      <TaskContext.Provider value={{task, setNewTask}}>
        <View style={styles.piniata}>
          <Piniata />
        </View>
        <View style={styles.task}>
          <Task />
        </View>
        <View style={styles.buttons}>
          <Buttons regenerateTask={regenerateTask} />
        </View>
      </TaskContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: AppColors.Red,
  },
  piniata: {
    flex: 2,
    backgroundColor: AppColors.Mint,
  },
  task: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: AppColors.Yellow,
  },
  buttons: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: AppColors.Red,
  },
});

export default App;
