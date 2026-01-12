import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React from 'react';
import { Colors } from '../../../shared/config/colors';

interface ICalendarCustomProps {
  closeModal: () => void;
  onSelect: (value: string) => void;
}
const CalendarCustom = ({ closeModal, onSelect }: ICalendarCustomProps) => {
  const handleDayPress = (day: { dateString: string }) => {
    const date = day.dateString.split('-').reverse().join('.');
    onSelect(date);
    closeModal();
  };

  return (
    <View>
      <Calendar
        onDayPress={handleDayPress}
        hideExtraDays={true}
        theme={{
          textSectionTitleColor: Colors.Gray,
          calendarBackground: 'transparent',
          todayTextColor: Colors.BlueL,
        }}
      />
    </View>
  );
};

export default CalendarCustom;
