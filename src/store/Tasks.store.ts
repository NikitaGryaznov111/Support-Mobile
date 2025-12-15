import { makeAutoObservable } from 'mobx';
import { TTask } from '../types/tasks.types';
class TaskStore {
  tasksList: TTask[] = [];
  // массив добавленных в избранное
  tasksInFavorites: TTask[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setTaskCreated(task: TTask) {
    this.tasksList.push(task);
  }
  deleteTask(id: string) {
    const index = this.tasksList.findIndex(t => t.id === id);
    if (index > -1) {
      this.tasksList.splice(index, 1);
    }
  }
  setTasksInFavorites(task: TTask) {
    const index = this.tasksInFavorites.findIndex(t => t.id === task.id);
    if (index !== -1) {
      // Удаляем, если есть
      this.tasksInFavorites.splice(index, 1);
    } else {
      // Добавляем, если нет
      this.tasksInFavorites.push(task);
    }
  }
}

export const taskStore = new TaskStore();
