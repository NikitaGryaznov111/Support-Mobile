/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TextInputCustom from '../ui/TextInputCustom';
import { Colors } from '../../constants/Colors';
import ModalCustom from '../ui/ModalCustom';
import Button from '../ui/Button';
// Подумай над передачей элементов списка от сюда либо стор
const FormCreateTask = () => {
  const [nameTask, setNameTask] = useState<string>('');
  const [descTask, setDescTask] = useState<string>('');
  const [dateTask, setDateTask] = useState<string>('');
  const [iconName, setIconName] = useState({
    typesTasks: 'chevron-up',
    priorityTasks: 'chevron-up',
  });
  const [isModalActiveTypesTasks, setIsModalActiveTypesTasks] = useState(false);
  const [isModalActivePriorityTasks, setIsModalActivePriorityTasks] =
    useState(false);

  const openModal = (modalType: string) => {
    if (modalType === 'typeTasks') {
      setIsModalActiveTypesTasks(true);
      setIconName(prev => ({ ...prev, typesTasks: 'chevron-down' }));
    }
    if (modalType === 'priorityTasks') {
      setIsModalActivePriorityTasks(true);
      setIconName(prev => ({ ...prev, priorityTasks: 'chevron-down' }));
    }
  };
  const closeModal = (modalType: string) => {
    if (modalType === 'typeTasks') {
      setIsModalActiveTypesTasks(false);
      setIconName(prev => ({ ...prev, typesTasks: 'chevron-up' }));
    } else if (modalType === 'priorityTasks') {
      setIsModalActivePriorityTasks(false);
      setIconName(prev => ({ ...prev, priorityTasks: 'chevron-up' }));
    }
  };
  const saveTask = () => {};
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.label}>Тип задачи</Text>
        <TouchableOpacity
          style={styles.dropDown}
          onPress={() => openModal('typeTasks')}
        >
          <Text>Дневная</Text>
          <Icon name={iconName.typesTasks} />
        </TouchableOpacity>
        <ModalCustom
          isModalActive={isModalActiveTypesTasks}
          closeModal={() => closeModal('typeTasks')}
          typeModal="typeTasks"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Приоритет</Text>
        <TouchableOpacity
          style={styles.dropDown}
          onPress={() => openModal('priorityTasks')}
        >
          <Text>Средний</Text>
          <Icon name={iconName.priorityTasks} />
        </TouchableOpacity>
        <ModalCustom
          isModalActive={isModalActivePriorityTasks}
          closeModal={() => closeModal('priorityTasks')}
          typeModal="priorityTasks"
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
        <TextInputCustom
          value={dateTask}
          onChange={setDateTask}
          colorText={{ color: Colors.TextCreateTask }}
        />
      </View>
      <View style={styles.containerBtnSave}>
        <Button
          title="Сохранить"
          onClick={saveTask}
          style={{ color: '#ffffff' }}
        />
      </View>
    </View>
  );
};

export default FormCreateTask;

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
  label: {
    color: Colors.label,
    marginBottom: 5,
  },
  containerBtnSave: {
    backgroundColor: Colors.primaryBgBtn,
    borderRadius: 20,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
