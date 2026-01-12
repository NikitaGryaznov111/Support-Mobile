/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonAddTask from '../../features/create-task/ui/ButtonAddTask';

const CalendarScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* TODO Сделать компонент календаря */}
      <ButtonAddTask />
    </SafeAreaView>
  );
};

export default CalendarScreen;
