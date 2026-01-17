import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TTask } from '../../../shared/types/tasks.types';
import { Colors } from '../../../shared/config/colors';
import Checkbox from '../../../shared/ui/Checkbox';
import { taskStore } from '../model/task.store';

interface ICompletedTaskProps {
  item: TTask;
}
const CompletedTask = ({ item }: ICompletedTaskProps) => {
  const [isCompleted, setIsCompleted] = useState(true);
  const { name, date } = item;
  const onChecked = () => {
    setIsCompleted(prev => !prev);
    taskStore.toggleCompletedTasks(item);
    taskStore.setTasksList(item);
  };
  return (
    <View style={styles.item}>
      <Checkbox checked={isCompleted} onChecked={onChecked} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <View>{date && <Text style={styles.date}>{date}</Text>}</View>
      </View>
    </View>
  );
};

export default CompletedTask;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.GrayLL,
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    textDecorationLine: 'line-through',
  },
  date: {
    fontSize: 10,
    fontWeight: '400',
  },
});
