/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Icon from 'react-native-vector-icons/Ionicons';
import { TTask } from '../../types/tasks.types';
import { Colors } from '../../constants/Colors';
import Checkbox from '../ui/Checkbox';
import { taskStore } from '../../store/Tasks.store';
// TODO Надо его улучшить, что-то мне не нравится вид
interface TaskItemProps {
  item: TTask;
}
const TaskItem = ({ item }: TaskItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  // TODO isFlag тоже обрабатывай через mobX
  // TODO создай  модалку - toast, здесь используй как предупреждение при удалении задачи
  // TODO Измени дизайн кнопки удаления задачи
  const [isFlag, setIsFlag] = useState(false);
  const { name, type, desc, date, id } = item;
  const saveInFavorites = (task: TTask) => {
    taskStore.setTasksInFavorites(task);
  };
  const removeTask = (id: string) => {
    taskStore.deleteTask(id);
  };
  const onChecked = () => {
    setIsChecked(prev => !prev);
    taskStore.setCompletedTasks(item);
  };
  const isFavorites = taskStore.tasksInFavorites.some(task => task.id === id);

  return (
    <View
      style={[styles.item, isChecked && { backgroundColor: Colors.GrayLL }]}
    >
      <View style={[styles.leftLine, isChecked && { opacity: 1 }]} />
      <View style={styles.content}>
        <Checkbox checked={isChecked} onChecked={onChecked} />
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => setIsExpanded(prev => !prev)}
        >
          <Text style={styles.taskName}>{name}</Text>
          {isExpanded && (
            <View>
              {desc && <Text style={styles.taskDesc}>{desc}</Text>}
              {date && <Text style={styles.taskDate}>{date}</Text>}
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.rightContent}>
          <Text style={[styles.typeTask, !isChecked && { color: Colors.Gray }]}>
            {type && `@${type}`}
          </Text>
          <TouchableOpacity onPress={() => setIsFlag(prev => !prev)}>
            <Icon
              name="flag-outline"
              size={20}
              color={isFlag ? Colors.Red : Colors.Gray}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => saveInFavorites(item)}>
            <Icon
              name="star-outline"
              size={20}
              color={isFavorites ? Colors.Gold : Colors.Gray}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeTask(id)}>
            <Icon name="remove" size={20} />
          </TouchableOpacity>
        </View>
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
  },
  leftLine: {
    width: 5,
    backgroundColor: Colors.BlueD,
    opacity: 0,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
    flex: 1,
  },
  textContainer: {
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
