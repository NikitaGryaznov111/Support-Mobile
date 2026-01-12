/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TasksList from '../../entities/task/ui/TasksList';
import ButtonAddTask from '../../features/create-task/ui/ButtonAddTask';

const TasksScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TasksList />
      <ButtonAddTask />
    </SafeAreaView>
  );
};

export default TasksScreen;
