import { makeAutoObservable } from 'mobx';
import { TaskCreated } from '../types/tasks.types';
class TaskStore {
  tasksList: TaskCreated[] = [];
  // массив добавленных в избранное
  tasksInFavorites: TaskCreated[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setTaskCreated(value: TaskCreated) {
    this.tasksList.push(value);
  }
  setTasksInFavorites(value: TaskCreated) {
    this.tasksInFavorites.push(value);
  }
}

export const taskStore = new TaskStore();
