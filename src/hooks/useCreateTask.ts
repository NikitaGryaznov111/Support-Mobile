import { useState } from 'react';
import { taskStore } from '../store/Tasks.store';

const useCreateTask = () => {
  const [nameTask, setNameTask] = useState<string>('');
  const [descTask, setDescTask] = useState<string>('');
  const [isModalActiveTypesTasks, setIsModalActiveTypesTasks] = useState(false);
  const [isModalActivePriorityTasks, setIsModalActivePriorityTasks] =
    useState(false);
  const [isModalActiveCalendar, setIsModalActiveCalendar] = useState(false);
  const [selectedTypeTask, setSelectedTypeTask] = useState<string>('');
  const [selectedPriorityTask, setSelectedPriorityTask] = useState<string>('');

  const iconName = {
    typesTasks: isModalActiveTypesTasks ? 'chevron-down' : 'chevron-up',
    priorityTasks: isModalActivePriorityTasks ? 'chevron-down' : 'chevron-up',
  };

  const openModal = (modalType: string) => {
    switch (modalType) {
      case 'typeTasks':
        setIsModalActiveTypesTasks(true);
        break;
      case 'priorityTasks':
        setIsModalActivePriorityTasks(true);
        break;
      case 'calendar':
        setIsModalActiveCalendar(true);
        break;
    }
  };
  const closeModal = (modalType: string) => {
    switch (modalType) {
      case 'typeTasks':
        setIsModalActiveTypesTasks(false);
        break;
      case 'priorityTasks':
        setIsModalActivePriorityTasks(false);
        break;
      case 'calendar':
        setIsModalActiveCalendar(false);
        break;
    }
  };
  const resetForm = () => {
    setSelectedTypeTask('');
    setSelectedPriorityTask('');
    setNameTask('');
    setDescTask('');
    taskStore.resetDate()
  };

  return {
    nameTask,
    setNameTask,
    descTask,
    setDescTask,
    iconName,
    isModalActiveTypesTasks,
    isModalActivePriorityTasks,
    selectedTypeTask,
    setSelectedTypeTask,
    selectedPriorityTask,
    setSelectedPriorityTask,
    openModal,
    closeModal,
    resetForm,
    isModalActiveCalendar,
    setIsModalActiveCalendar,
  };
};

export default useCreateTask;
