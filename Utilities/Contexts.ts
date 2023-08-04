import {createContext} from 'react';

export const TaskContext = createContext<{
  task: string;
  setNewTask: (newTask: string) => void;
} | null>(null);
