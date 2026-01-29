/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../model/store';
import Button from '../../../../shared/ui/Button';
import { WEEKS } from '../../../../shared/config/date';
import { Colors } from '../../../../shared/config/colors';
import { parseDate } from '../../../../shared/lib/date-utils';

const CalendarGrid = () => {
  // TODO Вынеси работу с датами в отдельную утилиту
  const month = taskStore.selectedMonth;
  const year = taskStore.selectedYear;
  // Получаю последний день установленного года и месяцы
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Получаю день недели первого дня месяца
  const dayWeekFirstDayMonth = new Date(year, month, 1).getDay();
  // Чтобы с понедельника был отсчет, пн теперь с 0
  const idexDayWeekFirstDayMonth =
    dayWeekFirstDayMonth === 0 ? 6 : dayWeekFirstDayMonth - 1;
  // Начанию формировать массив дней ceils, сначала там будут null, которые показывают количество дней недели до 1 числа выбранного месяца
  const ceils: Array<null | number> = Array.from(
    { length: idexDayWeekFirstDayMonth },
    () => null,
  );
  // Затем заполняю массив датами выбранного месяца
  for (let i = 1; i <= daysInMonth; i++) {
    ceils.push(i);
  }
  // Получаю количество строк
  const rowLength = Math.ceil(ceils.length / 7);
  const arrRows = Array.from({ length: rowLength }, (_, i) => i);

  const isCurrentDay = (day: number | null) => {
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    return day === currentDay && month === currentMonth && year === currentYear;
  };

  const handleSetDay = (day: number | null) => {
    taskStore.setSelectedDate({
      day,
      month,
      year,
    });
  };

  const isSelectedDay = (day: number | null) => {
    return (
      day === taskStore.selectedDate?.day &&
      year === taskStore.selectedDate.year &&
      month === taskStore.selectedDate.month
    );
  };

  const taskSet = new Set(taskStore.tasksList.map(task => task.date)) || [];

  const isSetTaskInThisDay = (day: number | null) => {
    const dateString = parseDate({
      day,
      month,
      year,
    });
    return taskSet.has(dateString);
  };
  // Делаю таблицу 7*5
  return (
    <View style={styles.container}>
      <View style={styles.weekContainer}>
        {WEEKS.map(w => (
          <Text style={styles.dayWeek} key={w}>
            {w}
          </Text>
        ))}
      </View>

      {arrRows.map((_, indexRow) => {
        // Каждые 7 следующих дней показываю в календаре
        const start = indexRow * 7;
        const weekCeils = ceils.slice(start, start + 7);
        // Заполняю последнюю неделю месяца null, чтобы оставшиеся дни не растягивались
        while (weekCeils.length < 7) {
          weekCeils.push(null);
        }
        return (
          <View style={styles.row} key={start + indexRow}>
            {weekCeils.map((day, indexCeil) => {
              return (
                <View key={indexCeil}>
                  <Button
                    title={day?.toString() || ''}
                    onPress={() => handleSetDay(day)}
                    styleView={[
                      isSelectedDay(day) && styles.selectDay,
                      styles.day,
                    ]}
                    styleText={[
                      isCurrentDay(day) && { color: Colors.BlueL },
                      isSelectedDay(day) && { color: Colors.White },
                    ]}
                  />
                  {/* View Для даты с задачами */}
                  {isSetTaskInThisDay(day) && (
                    <View
                      style={
                        isSelectedDay(day)
                          ? { display: 'none' }
                          : styles.taskInDay
                      }
                    />
                  )}
                </View>
              );
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
    justifyContent: 'space-between',
  },
  dayWeek: {
    width: 32,
    height: 32,
    textAlign: 'center',
  },
  day: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectDay: {
    backgroundColor: Colors.BlueLL,
    padding: 3,
    borderRadius: 16,
  },
  taskInDay: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.BlueL,
    position: 'absolute',
    bottom: 0,
    left: 14,
  },
});
