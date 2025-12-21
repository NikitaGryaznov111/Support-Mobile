/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TasksList from '../../../components/features/TasksList';
import ButtonAddTask from '../../../components/features/ButtonAddTask';

const TasksScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TasksList />
      <ButtonAddTask />
    </SafeAreaView>
  );
};

export default TasksScreen;
