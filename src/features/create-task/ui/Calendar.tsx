import { StyleSheet, View } from 'react-native';
import React from 'react';
import SwitchMonth from './SwitchMonth';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <SwitchMonth />
    </View>
  );
};

export default Calendar;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
});
