import { TSelectedDate } from '../../entities/task/model/types';

export const parseDate = (date: TSelectedDate): string => {
  if (!date) {
    throw new Error('Невалидная дата');
  }
  const { day, month, year } = date;
  const monthString = month < 10 ? `0${month + 1}` : month + 1;
  const dayString = Number(day) < 10 ? `0${Number(day)}` : Number(day);
  const dateString = `${dayString}.${monthString}.${year}`;
  return dateString;
};
