import { makeAutoObservable } from 'mobx';
import { TTask } from '../../../shared/types/tasks.types';
class TaskStore {
  tasksList: TTask[] = [];
  tasksInFavorites: TTask[] = [];
  completedTasks: TTask[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  toggleTasksList(task: TTask) {
    const index = this.tasksList.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasksList.splice(index, 1);
    } else {
      this.tasksList.push(task);
    }
  }

  toggleTasksInFavorites(task: TTask) {
    const index = this.tasksInFavorites.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasksInFavorites.splice(index, 1);
    } else {
      this.tasksInFavorites.push(task);
    }
  }
  toggleCompletedTasks(task: TTask) {
    const index = this.completedTasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.completedTasks.splice(index, 1);
    } else {
      this.completedTasks.push(task);
    }
  }
}

export const taskStore = new TaskStore();
