import {createContext} from 'react';

export const TaskContext = createContext<{
  task: number[] | null;
  setNewTask: (newTask: number[]) => void;
} | null>(null);
