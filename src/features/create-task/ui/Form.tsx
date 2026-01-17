/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import { Colors } from '../../../shared/config/colors';
import Button from '../../../shared/ui/Button';
import useCreateTask from '../lib/useCreateTask';
import { toAst } from '../../../shared/lib/toAst';
import { taskStore } from '../../../entities/task/model/task.store';
import {
  priorityTasks,
  typesTasks,
} from '../../../entities/task/config/task.config';
import FormItem from './FormItem';
interface IFormProps {
  closeForm: () => void;
}
const Form = ({ closeForm }: IFormProps) => {
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

    taskStore.setTasksList({
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
      <FormItem
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
      <FormItem
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
      <FormItem
        mode="textInput"
        label="Имя задачи *"
        value={nameTask}
        setValue={setNameTask}
      />
      <FormItem
        mode="textInput"
        label="Описание задачи"
        value={descTask}
        setValue={setDescTask}
      />
      <FormItem
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
          onPress={resetForm}
          styleText={{ color: Colors.White }}
          styleView={styles.button}
        />
        <Button
          title="Сохранить"
          onPress={saveTask}
          styleText={{ color: Colors.White }}
          styleView={styles.button}
        />
      </View>
    </View>
  );
};

export default observer(Form);

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
