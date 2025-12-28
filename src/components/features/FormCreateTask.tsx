/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Colors } from '../../constants/Colors';
import Button from '../ui/Button';
import { priorityTasks, typesTasks } from '../../data/tasks';
import useCreateTask from '../../hooks/useCreateTask';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../store/Tasks.store';
import FormCreateItem from './FormCreateItem';
import { toAst } from '../../utils/toAst';
interface IFormCreateTaskProps {
  closeForm: () => void;
}
const FormCreateTask = ({ closeForm }: IFormCreateTaskProps) => {
  const {
    nameTask,
    setNameTask,
    descTask,
    iconName,
    setDescTask,
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
    selectedDate,
    setSelectedDate,
  } = useCreateTask();
  const saveTask = () => {
    if (!nameTask || !selectedDate) {
      toAst('Заполните название задачи и дату');
      return;
    }

    taskStore.setTaskCreated({
      type: selectedTypeTask,
      priority: selectedPriorityTask,
      name: nameTask,
      desc: descTask,
      date: selectedDate,
      id: uuidv4(),
    });
    resetForm();
    closeForm();
  };

  return (
    <View style={styles.form}>
      <FormCreateItem
        mode="modal"
        label="Тип задачи"
        data={typesTasks}
        selectedItem={selectedTypeTask}
        isModalActive={isModalActiveTypesTasks}
        onSelect={setSelectedTypeTask}
        iconName={iconName.typesTasks}
        openModal={() => openModal('typeTasks')}
        closeModal={() => closeModal('typeTasks')}
      />
      <FormCreateItem
        mode="modal"
        label="Приоритет"
        data={priorityTasks}
        selectedItem={selectedPriorityTask}
        isModalActive={isModalActivePriorityTasks}
        onSelect={setSelectedPriorityTask}
        iconName={iconName.priorityTasks}
        openModal={() => openModal('priorityTasks')}
        closeModal={() => closeModal('priorityTasks')}
      />
      <FormCreateItem
        mode="textInput"
        label="Имя задачи *"
        value={nameTask}
        setValue={setNameTask}
      />
      <FormCreateItem
        mode="textInput"
        label="Описание задачи"
        value={descTask}
        setValue={setDescTask}
      />
      <FormCreateItem
        mode="calendar"
        label="Дата *"
        selectedItem={selectedDate}
        isModalActive={isModalActiveCalendar}
        onSelect={setSelectedDate}
        iconName="calendar"
        openModal={() => openModal('calendar')}
        closeModal={() => closeModal('calendar')}
      />
      <View style={styles.buttons}>
        <Button
          title="Очистить форму"
          onClick={resetForm}
          styleText={{ color: '#ffffff' }}
          styleView={styles.button}
        />
        <Button
          title="Сохранить"
          onClick={saveTask}
          styleText={{ color: '#ffffff' }}
          styleView={styles.button}
        />
      </View>
    </View>
  );
};

export default observer(FormCreateTask);

const styles = StyleSheet.create({
  form: {
    padding: 10,
  },
  dropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: Colors.GrayD,
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: Colors.BlueL,
    borderRadius: 20,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
