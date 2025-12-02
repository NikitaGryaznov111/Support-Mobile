/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TextInputCustom from '../ui/TextInputCustom';
import { Colors } from '../../constants/Colors';
import ModalCustom from '../ui/ModalCustom';
import ModalCalendar from '../ui/ModalCalendar';
import Button from '../ui/Button';
import { priorityTasks, typesTasks } from '../../data/tasks';
import useCreateTask from '../../hooks/useCreateTask';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../store/Tasks.store';
// Модалку можно сделать одну, переиспользуемую и передавать уже нужный контент
// ПРодолжи работать со стором и календарем
const FormCreateTask = () => {
  const {
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
  } = useCreateTask();

  const saveTask = () => {};
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.label}>Тип задачи</Text>
        <TouchableOpacity
          style={styles.dropDown}
          onPress={() => openModal('typeTasks')}
        >
          <Text style={{ color: Colors.TextCreateTask }}>
            {selectedTypeTask}
          </Text>
          <Icon name={iconName.typesTasks} />
        </TouchableOpacity>
        <ModalCustom
          isModalActive={isModalActiveTypesTasks}
          closeModal={() => closeModal('typeTasks')}
          data={typesTasks}
          onSelect={setSelectedTypeTask}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Приоритет</Text>
        <TouchableOpacity
          style={styles.dropDown}
          onPress={() => openModal('priorityTasks')}
        >
          <Text style={{ color: Colors.TextCreateTask }}>
            {selectedPriorityTask}
          </Text>
          <Icon name={iconName.priorityTasks} />
        </TouchableOpacity>
        <ModalCustom
          isModalActive={isModalActivePriorityTasks}
          closeModal={() => closeModal('priorityTasks')}
          data={priorityTasks}
          onSelect={setSelectedPriorityTask}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Имя задачи</Text>
        <TextInputCustom
          value={nameTask}
          onChange={setNameTask}
          colorText={{ color: Colors.TextCreateTask }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Описание задачи</Text>
        <TextInputCustom
          value={descTask}
          onChange={setDescTask}
          colorText={{ color: Colors.TextCreateTask }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Дата</Text>
        <TouchableOpacity
          style={styles.date}
          onPress={() => setIsModalActiveCalendar(true)}
        >
          <Text>{taskStore.selectedDate}</Text>
          <Icon name="calendar" />
        </TouchableOpacity>
        <ModalCalendar
          isModalActive={isModalActiveCalendar}
          closeModal={() => setIsModalActiveCalendar(false)}
        />
      </View>
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
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingTop: 20,
  },
  container: {
    marginBottom: 10,
    width: '100%',
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: Colors.bottomLine,
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
    color: Colors.label,
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerBtn: {
    backgroundColor: Colors.primaryBgBtn,
    borderRadius: 20,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
