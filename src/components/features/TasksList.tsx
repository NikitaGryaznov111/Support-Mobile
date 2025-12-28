/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../store/Tasks.store';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TTask } from '../../types/tasks.types';
import TaskItem from './TaskItem';
import { Colors } from '../../constants/Colors';
import Button from '../ui/Button';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../constants/Routes';
import { TasksNavigateProps } from '../../types/navigation.types';
// TODO продолжи работать с выполненными заданиями + сделай анимацию кнопки

const TasksList = () => {
  const { navigate } = useNavigation<TasksNavigateProps>();
  const tasks = taskStore.tasksList;
  const tasksCompleted = taskStore.completedTasks;
  const taskCount = tasks.length;

  const renderItem = ({ item }: { item: TTask }) => {
    return <TaskItem item={item} />;
  };
  console.log(tasksCompleted);

  const renderFooter = () => {
    return tasksCompleted.length ? (
      <Button
        onClick={() => navigate(Routes.CompletedTasksScreen)}
        title="Посмотреть выполненные задачи"
        styleText={{ color: Colors.Gray }}
        styleView={styles.footerButton}
      />
    ) : null;
  };

  return tasks.length ? (
    <FlatList
      renderItem={renderItem}
      data={tasks}
      keyExtractor={item => item.id}
      extraData={taskCount}
      ListFooterComponent={renderFooter}
    />
  ) : (
    <View style={styles.emptyContainer}>
      <Text style={{ fontWeight: '500' }}>Отсутствуют добавленные задачи</Text>
      {tasksCompleted.length ? (
        <Button
          onClick={() => navigate(Routes.CompletedTasksScreen)}
          title="Посмотреть выполненные задачи"
          styleText={{ color: Colors.Gray }}
          styleView={styles.footerButton}
        />
      ) : null}
    </View>
  );
};

export default observer(TasksList);
const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  footerButton: {
    alignItems: 'center',
    marginTop: 10,
  },
});
