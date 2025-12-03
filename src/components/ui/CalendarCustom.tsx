/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React from 'react';
import { Colors } from '../../constants/Colors';
import { taskStore } from '../../store/Tasks.store';
import { observer } from 'mobx-react-lite';

const CalendarCustom = () => {
  const handleDayPress = (day: { dateString: string }) => {
    taskStore.setSelectedDate(day.dateString);
  };

  return (
    <View>
      <Text style={{ textAlign: 'center', marginBottom:5 }}>Выберите дату</Text>
      <Calendar
        markedDates={{
          [taskStore.selectedDate]: {
            selected: true,
            selectedColor: '#6200ee',
            selectedTextColor: Colors.primaryText,
          },
        }}
        onDayPress={handleDayPress}
        hideExtraDays={true}
        theme={{
          textSectionTitleColor: '#666',
calendarBackground: 'transparent',
          selectedDayBackgroundColor: '#6200ee',
          todayTextColor: '#6200ee',
        }}
      />
    </View>
  );
};

export default observer(CalendarCustom);
