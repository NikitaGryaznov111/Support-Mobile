import { useState } from 'react';

const useCreateTask = () => {
  const [nameTask, setNameTask] = useState<string>('');
  const [descTask, setDescTask] = useState<string>('');
  const [dateTask, setDateTask] = useState<string>('');
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
    if (modalType === 'typeTasks') setIsModalActiveTypesTasks(true);
    if (modalType === 'priorityTasks') setIsModalActivePriorityTasks(true);
  };
  const closeModal = (modalType: string) => {
    if (modalType === 'typeTasks') setIsModalActiveTypesTasks(false);
    if (modalType === 'priorityTasks') setIsModalActivePriorityTasks(false);
  };
  const resetForm = () => {
    setSelectedTypeTask('');
    setSelectedPriorityTask('');
    setNameTask('');
    setDescTask('');
    setDateTask('');
  };

  return {
    nameTask,
    setNameTask,
    descTask,
    setDescTask,
    dateTask,
    setDateTask,
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
