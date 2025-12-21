/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../store/Tasks.store';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TTask } from '../../types/tasks.types';
import TaskItem from './TaskItem';
import { Colors } from '../../constants/Colors';

const TasksList = () => {
  const renderItem = ({ item }: { item: TTask }) => {
    return <TaskItem item={item} />;
  };
  const tasks = taskStore.tasksList;
  const tasksCompleted = taskStore.completedTasks;
  const taskCount = tasks.length;
  // TODO продолжи работать с выполненными заданиями + сделай анимацию кнопки
  // Экран заданий придется делать стеком, чтобы внутри него был экран выполненных задач
  return (
    <>
      {tasks.length ? (
        <FlatList
          renderItem={renderItem}
          data={tasks}
          keyExtractor={item => item.id}
          extraData={taskCount}
        />
      ) : (
        <View style={styles.container}>
          <Text>Отсутствуют добавленные задачи</Text>
        </View>
      )}
      {tasksCompleted.length && (
        <TouchableOpacity>
          <Text
            style={{ textDecorationColor: 'underLine', color: Colors.Gray }}
          >
            Посмотреть выполненные задачи
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default observer(TasksList);
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    rowGap: 10,
  },
  btn: {
    backgroundColor: Colors.BlueL,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
