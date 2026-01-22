import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import Button from '../../../shared/ui/Button';
import { MONTHS } from '../../../shared/config/date';
import { taskStore } from '../../../entities/task/model/task.store';
import { Colors } from '../../../shared/config/colors';

const SwitchMonth = () => {
  const handleNextMonth = () => {
    taskStore.setIndexMonth('next');
  };
  const handlePrevMonth = () => {
    taskStore.setIndexMonth('prev');
  };
  const month = MONTHS[taskStore.IndexMonth];
  const year = taskStore.currentYear;
  const isCurrentMonth =
    taskStore.IndexMonth === new Date().getMonth() &&
    year === new Date().getFullYear();

  return (
    <View style={styles.container}>
      <Button icon="chevron-back" onPress={handlePrevMonth} />
      <View style={styles.date}>
        <Text style={!isCurrentMonth && { color: Colors.Gray }}>{month}</Text>
        <Text>{year}</Text>
      </View>
      <Button icon="chevron-forward" onPress={handleNextMonth} />
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
    width: '30%',
    justifyContent: 'center',
    columnGap: 5,
  },
});
