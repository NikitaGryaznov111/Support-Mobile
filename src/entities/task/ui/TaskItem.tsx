/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TTask } from '../../../shared/types/tasks.types';
import { Colors } from '../../../shared/config/colors';
import Checkbox from '../../../shared/ui/Checkbox';
import Button from '../../../shared/ui/Button';
import { taskStore } from '../model/task.store';

// TODO isFlag тоже обрабатывай через mobX
// TODO создай  модалку - toast, здесь используй как предупреждение при удалении задачи
// TODO Измени дизайн кнопки удаления задачи
interface TaskItemProps {
  item: TTask;
}
const TaskItem = ({ item }: TaskItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFlag, setIsFlag] = useState(false);
  const { name, type, desc, date, id } = item;

  const isCompleted = taskStore.completedTasks.some(task => task.id === id);
  const isFavorites = taskStore.tasksInFavorites.some(task => task.id === id);

  const saveInFavorites = (task: TTask) => {
    taskStore.toggleTasksInFavorites(task);
  };
  const removeTask = (item: TTask) => {
    taskStore.toggleTasksList(item);
  };
  const onChecked = () => {
    taskStore.toggleCompletedTasks(item);
    taskStore.toggleTasksList(item);
  };
  console.log(taskStore.tasksList);

  return (
    <View
      style={[
        styles.item,
        isCompleted && {
          backgroundColor: Colors.GrayLL,
        },
      ]}
    >
      <Checkbox checked={isCompleted} onChecked={onChecked} />
      <TouchableOpacity
        style={styles.textContent}
        onPress={() => setIsExpanded(prev => !prev)}
      >
        <Text style={styles.taskName}>{name}</Text>
        {desc && isExpanded && <Text style={styles.taskDesc}>{desc}</Text>}
        {date && isExpanded && <Text style={styles.taskDate}>{date}</Text>}
      </TouchableOpacity>
      <View style={styles.rightContent}>
        <Text style={[styles.typeTask, !isCompleted && { color: Colors.Gray }]}>
          {type && `@${type}`}
        </Text>
        <Button
          icon="flag-outline"
          onClick={() => setIsFlag(prev => !prev)}
          size={20}
          styleIcon={{ color: isFlag ? Colors.Red : Colors.Gray }}
        />
        <Button
          icon="star-outline"
          onClick={() => saveInFavorites(item)}
          size={20}
          styleIcon={{ color: isFavorites ? Colors.Gold : Colors.Gray }}
        />
        <Button
          icon="remove"
          onClick={() => removeTask(item)}
          size={20}
          styleIcon={{ color: Colors.Gray }}
        />
      </View>
    </View>
  );
};

export default observer(TaskItem);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.Gray,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  textContent: {
    flex: 1,
  },
  taskName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  taskDesc: {
    fontSize: 12,
    fontWeight: '400',
  },
  taskDate: {
    fontSize: 10,
    fontWeight: '400',
  },
  rightContent: {
    marginTop: 'auto',
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  typeTask: {
    fontSize: 11,
    alignSelf: 'flex-end',
  },
});
