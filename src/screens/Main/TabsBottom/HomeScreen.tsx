/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TasksList from '../../../components/features/TasksList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TasksList />
      {/* Можно доавить кнопку здесь и рендерить ее по условию */}
    </SafeAreaView>
  );
};

export default HomeScreen;
