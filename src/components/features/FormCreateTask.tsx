/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
import Button from '../ui/Button';
import { priorityTasks, typesTasks } from '../../data/tasks';
import useCreateTask from '../../hooks/useCreateTask';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../store/Tasks.store';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../constants/Routes';
import { NavigateProps } from '../../types/navigation.types';
import FormCreateItem from './FormCreateItem';
const FormCreateTask = () => {
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
  const { navigate } = useNavigation<NavigateProps>();

  const saveTask = () => {
    // if (
    //   !selectedTypeTask ||
    //   !selectedPriorityTask ||
    //   !nameTask ||
    //   !selectedDate
    // ) {
    //   Alert.alert('Заполните поля для создания задачи');
    //   return;
    // }

    taskStore.setTaskCreated({
      type: selectedTypeTask,
      priority: selectedPriorityTask,
      name: nameTask,
      desc: descTask,
      date: selectedDate,
      id: `${new Date()}`,
    });
    resetForm();
    navigate(Routes.HomeTab, {
      screen: Routes.HomeScreen,
    });
  };

  return (
    <View style={styles.form}>
      <FormCreateItem
        mode="modal"
        label="Тип задачи"
        data={typesTasks}
        typeModal="typeTasks"
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
        typeModal="priorityTasks"
        selectedItem={selectedPriorityTask}
        isModalActive={isModalActivePriorityTasks}
        onSelect={setSelectedPriorityTask}
        iconName={iconName.priorityTasks}
        openModal={() => openModal('priorityTasks')}
        closeModal={() => closeModal('priorityTasks')}
      />
      <FormCreateItem
        mode="textInput"
        label="Имя задачи"
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
        mode="modal"
        label="Дата"
        typeModal="calendar"
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
          styleView={styles.containerBtn}
        />
        <Button
          title="Сохранить"
          onClick={saveTask}
          styleText={{ color: '#ffffff' }}
          styleView={styles.containerBtn}
        />
      </View>
    </View>
  );
};

export default observer(FormCreateTask);

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingTop: 20,
  },
  container: {
    marginBottom: 10,
    width: '100%',
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: Colors.BlueD,
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
  containerBtn: {
    backgroundColor: Colors.BlueL,
    borderRadius: 20,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
