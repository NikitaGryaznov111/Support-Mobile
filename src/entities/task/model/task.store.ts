import { makeAutoObservable } from 'mobx';
import { TTask } from '../../../shared/types/tasks.types';

class TaskStore {
  tasksList: TTask[] = [];
  tasksInFavorites: TTask[] = [];
  completedTasks: TTask[] = [];
  selectedFilterType: string | null = null;
  IndexMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();

  constructor() {
    makeAutoObservable(this);
  }

  setTasksList(task: TTask) {
    this.tasksList.push(task);
  }
  removeFromTasksList(task: TTask) {
    const index = this.tasksList.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasksList.splice(index, 1);
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

  get filteredTasksByType() {
    if (this.selectedFilterType === null) {
      return this.tasksList;
    }
    return this.tasksList.filter(t => t.type === this.selectedFilterType);
  }

  setSelectedFilterType(type: string | null) {
    this.selectedFilterType = type;
  }

  setIndexMonth(value: 'prev' | 'next') {
    switch (value) {
      case 'next':
        if (this.IndexMonth === 11) {
          this.IndexMonth = 0;
          this.currentYear += 1;
        } else {
          this.IndexMonth = this.IndexMonth + 1;
        }
        break;
      case 'prev':
        if (this.IndexMonth === 0) {
          this.IndexMonth = 11;
          this.currentYear -= 1;
        } else {
          this.IndexMonth = this.IndexMonth - 1;
        }
    }
  }
}

export const taskStore = new TaskStore();
