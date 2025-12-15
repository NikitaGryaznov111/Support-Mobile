/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React from 'react';
import { Colors } from '../../constants/Colors';
import { observer } from 'mobx-react-lite';

interface CalendarCustomProps {
  closeModal: () => void;
  onSelect: (value: string) => void;
}
const CalendarCustom = ({ closeModal, onSelect }: CalendarCustomProps) => {
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
          textSectionTitleColor: '#666',
          calendarBackground: 'transparent',
          todayTextColor: Colors.BlueL,
        }}
      />
    </View>
  );
};

export default observer(CalendarCustom);
