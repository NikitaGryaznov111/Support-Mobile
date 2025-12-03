/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React from 'react';
import { Colors } from '../../constants/Colors';
import { taskStore } from '../../store/Tasks.store';
import { observer } from 'mobx-react-lite';

interface CalendarCustomProps {
    closeModal: () => void;

}
const CalendarCustom = ({closeModal}:CalendarCustomProps) => {
  const handleDayPress = (day: { dateString: string }) => {
    taskStore.setSelectedDate(day.dateString);
    closeModal()
  };

  return (
    <View>
      <Calendar
        onDayPress={handleDayPress}
        hideExtraDays={true}
        theme={{
          textSectionTitleColor: '#666',
          calendarBackground: 'transparent',
          todayTextColor: Colors.primaryBgBtn,
        }}
      />
    </View>
  );
};

export default observer(CalendarCustom);
