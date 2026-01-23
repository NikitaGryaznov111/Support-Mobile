/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonAddTask from '../../features/create-task/ui/ButtonAddTask';
import CalendarView from '../../entities/task/ui/calendar-view/CalendarView';

const CalendarScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CalendarView />
      <ButtonAddTask />
    </SafeAreaView>
  );
};

export default CalendarScreen;
