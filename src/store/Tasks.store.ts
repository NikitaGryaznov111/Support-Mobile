//Продолжи создавать стор

import { makeAutoObservable } from 'mobx';

class TaskStore {
  selectedDate = '';
  constructor() {
    makeAutoObservable(this);
  }
  setSelectedDate(value: string) {
    const newDate = value.split('-').reverse().join('.');
    this.selectedDate = newDate;
  }
}

export const taskStore = new TaskStore();
