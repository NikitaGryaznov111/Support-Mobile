import { makeAutoObservable } from 'mobx';
import { TTask } from '../../../shared/types/tasks.types';
import { TSelectedDate } from './types';

class TaskStore {
  tasksList: TTask[] = [];
  tasksInFavorites: TTask[] = [];
  completedTasks: TTask[] = [];
  selectedFilterType: string | null = null;
  selectedMonth: number = new Date().getMonth();
  selectedYear: number = new Date().getFullYear();
  selectedDate: TSelectedDate = null;

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
        if (this.selectedMonth === 11) {
          this.selectedMonth = 0;
          this.selectedYear += 1;
        } else {
          this.selectedMonth = this.selectedMonth + 1;
        }
        break;
      case 'prev':
        if (this.selectedMonth === 0) {
          this.selectedMonth = 11;
          this.selectedYear -= 1;
        } else {
          this.selectedMonth = this.selectedMonth - 1;
        }
    }
  }

  setSelectedDate(date: TSelectedDate) {
    this.selectedDate = date;
  }
}

export const taskStore = new TaskStore();
