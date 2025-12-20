import { useState } from 'react';

const useCreateTask = () => {
  // TODO Поменяй на useReducer
  const [nameTask, setNameTask] = useState<string>('');
  const [descTask, setDescTask] = useState<string>('');
  const [isModalActiveTypesTasks, setIsModalActiveTypesTasks] = useState(false);
  const [isModalActivePriorityTasks, setIsModalActivePriorityTasks] =
    useState(false);
  const [isModalActiveCalendar, setIsModalActiveCalendar] = useState(false);
  const [selectedTypeTask, setSelectedTypeTask] = useState<string>('');
  const [selectedPriorityTask, setSelectedPriorityTask] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');

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
    setSelectedDate('');
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
    selectedDate,
    setSelectedDate,
  };
};

export default useCreateTask;
