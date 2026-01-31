/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../model/store';
import Button from '../../../../shared/ui/Button';
import { WEEKS } from '../../../../shared/config/date';
import { Colors } from '../../../../shared/config/colors';
import {
  generateGridCalendar,
  getAllDatesTasks,
  getDaysInMonth,
  getIndexDayWeekFirstDayMonth,
  isCurrentDay,
  isSelectedDay,
  isSetTaskInThisDay,
} from './lib/calendar-utils';

const CalendarGrid = () => {
  const month = taskStore.selectedMonth;
  const year = taskStore.selectedYear;

  const { ceils, rows } = useMemo(() => {
    const daysInMonth = getDaysInMonth(year, month);
    const indexDayWeekFirstDayMonth = getIndexDayWeekFirstDayMonth(year, month);
    return generateGridCalendar(indexDayWeekFirstDayMonth, daysInMonth);
  }, [month, year]);

  const allDatesTasks = useMemo(
    () => getAllDatesTasks(taskStore.tasksList),
    [taskStore.tasksList],
  );
  const handleSetDay = (day: number | null) => {
    taskStore.setSelectedDate({
      day,
      month,
      year,
    });
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

      {rows.map((_, indexRow) => {
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
                      isSelectedDay(day, year, month, taskStore.selectedDate) &&
                        styles.selectDay,
                      styles.day,
                    ]}
                    styleText={[
                      isCurrentDay(day, month, year) && {
                        color: Colors.BlueL,
                      },
                      isSelectedDay(
                        day,
                        year,
                        month,
                        taskStore.selectedDate,
                      ) && { color: Colors.White },
                    ]}
                  />
                  {/* View Для даты с задачами */}
                  {isSetTaskInThisDay(day, month, year, allDatesTasks) && (
                    <View
                      style={
                        isSelectedDay(day, year, month, taskStore.selectedDate)
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
