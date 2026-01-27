import { StyleSheet, View } from 'react-native';
import React from 'react';
import SwitchMonth from './SwitchMonth';
import CalendarGrid from './CalendarGrid';

const CalendarView = () => {
  return (
    <View style={styles.container}>
      <SwitchMonth />
      <CalendarGrid />
    </View>
  );
};

export default CalendarView;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
});
