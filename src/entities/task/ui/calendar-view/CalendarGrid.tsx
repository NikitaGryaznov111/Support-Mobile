import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../model/task.store';

const CalendarGrid = () => {
  // Получаю последний день устьановленного года и месяцы
  const month = taskStore.IndexMonth;
  const year = taskStore.currentYear;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dayWeekFirstDayMonth = new Date(year, month, 1).getDay();
  const weeks = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const idexDayWeek = dayWeekFirstDayMonth === 0 ? 6 : dayWeekFirstDayMonth - 1;
  const arrRows = Array.from({ length: 5 }, (_, i) => i);
  console.log(idexDayWeek);

  // Заполняю массив дней недели до первого числа null
  const ceils: Array<null | number> = Array.from(
    { length: idexDayWeek },
    () => null,
  );

  // Делаю таблицу 7*5

  for (let i = 1; i <= daysInMonth; i++) {
    ceils.push(i);
  }

  return (
    <View style={styles.container}>
      <View style={styles.weekContainer}>
        {weeks.map(w => (
          <Text style={styles.dayWeek}>{w}</Text>
        ))}
      </View>

      {arrRows.map((r, indexRow) => {
        const start = indexRow * 7;
        const weekCeils = ceils.slice(start, start + 7);

        return (
          <View style={{ flexDirection: 'row' }}>
            {weekCeils.map(day => {
              return <Text>{day}</Text>;
            })}
          </View>
        );
      })}
    </View>
  );
};

export default observer(CalendarGrid);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  weekContainer: {
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'space-between',
  },
  dayWeek: {
    // flex:1
  },
});
