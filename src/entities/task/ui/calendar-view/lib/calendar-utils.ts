import { parseDate } from '../../../../../shared/lib/date-utils';
import { TTask } from '../../../../../shared/types/tasks.types';
import { TSelectedDate } from '../../../model/types';

export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};
export const getIndexDayWeekFirstDayMonth = (
  year: number,
  month: number,
): number => {
  const index = new Date(year, month, 1).getDay();
  return index === 0 ? 6 : index - 1;
};

export const isCurrentDay = (
  day: number | null,
  month: number,
  year: number,
) => {
  const now = new Date();
  const currentDay = now.getDate();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  return day === currentDay && month === currentMonth && year === currentYear;
};

export const generateGridCalendar = (
  numberDaysWeek: number,
  allDays: number,
) => {
  // Начанию формировать массив дней ceils, сначала там будут null, которые показывают количество дней недели до 1 числа выбранного месяца, затем все дни выбранного месяца

  const ceils: Array<null | number> = Array.from(
    { length: numberDaysWeek },
    () => null,
  );
  for (let i = 1; i <= allDays; i++) {
    ceils.push(i);
  }
  // Получаю количество строк
  const rowLength = Math.ceil(ceils.length / 7);
  const rows = Array.from({ length: rowLength }, (_, i) => i);
  return {
    ceils,
    rows,
  };
};

export const getAllDatesTasks = (tasksList: TTask[]) =>
  new Set(tasksList.map(task => task.date) || []);

export const isSelectedDay = (
  day: number | null,
  year: number,
  month: number,
  selectedDate: TSelectedDate,
) => {
  return (
    day === selectedDate?.day &&
    year === selectedDate.year &&
    month === selectedDate.month
  );
};

export const isSetTaskInThisDay = (
  day: number | null,
  month: number,
  year: number,
  allDatesTasks: Set<string>,
) => {
  if (!day) return false;
  const dateString = parseDate({
    day,
    month,
    year,
  });
  return allDatesTasks.has(dateString);
};
