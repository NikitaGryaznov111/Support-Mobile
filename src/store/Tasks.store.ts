//Продолжи создавать и типизировать стор

import { makeAutoObservable } from 'mobx';
import { TaskCreated } from '../types/tasks.types';
class TaskStore {
  tasksList: TaskCreated[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setTaskCreated(value: TaskCreated) {
    this.tasksList.push(value);
  }
}

export const taskStore = new TaskStore();
