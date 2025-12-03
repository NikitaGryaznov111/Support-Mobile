//Продолжи создавать и типизировать стор

import { makeAutoObservable } from 'mobx';
import { TaskCreated } from '../types/tasks.types';

class TaskStore {
  selectedDate = '';
  taskCreated = {};
  constructor() {
    makeAutoObservable(this);
  }
  setSelectedDate(value: string) {
    const newDate = value.split('-').reverse().join('.');
    this.selectedDate = newDate;
  }
  setTaskCreated(value: TaskCreated) {
    this.taskCreated = value;
  }
  resetDate(){
    this.selectedDate = ''
  }
}

export const taskStore = new TaskStore();
