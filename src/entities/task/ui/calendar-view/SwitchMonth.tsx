import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../model/store';
import { MONTHS } from '../../../../shared/config/date';
import Button from '../../../../shared/ui/Button';
import { Colors } from '../../../../shared/config/colors';

const SwitchMonth = () => {
  const handleNextMonth = () => {
    taskStore.setIndexMonth('next');
  };
  const handlePrevMonth = () => {
    taskStore.setIndexMonth('prev');
  };

  const month = MONTHS[taskStore.selectedMonth];
  const year = taskStore.selectedYear;

  const isCurrentMonth =
    taskStore.selectedMonth === new Date().getMonth() &&
    year === new Date().getFullYear();

  return (
    <View style={styles.container}>
      <Button icon="chevron-back" size={15} onPress={handlePrevMonth} />
      <View style={styles.date}>
        <Text style={[!isCurrentMonth && { color: Colors.Gray }, styles.text]}>
          {month}
        </Text>
        <Text style={styles.text}>{year}</Text>
      </View>
      <Button icon="chevron-forward" size={15} onPress={handleNextMonth} />
    </View>
  );
};

export default observer(SwitchMonth);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'center',
    columnGap: 5,
  },
  text: {
    fontSize: 16,
  },
});
