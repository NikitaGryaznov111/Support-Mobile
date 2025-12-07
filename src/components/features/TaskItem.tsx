/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TaskCreated } from '../../types/tasks.types';
import { Colors } from '../../constants/Colors';
import Checkbox from '../ui/Checkbox';
import { taskStore } from '../../store/Tasks.store';

interface TaskItemProps {
  item: TaskCreated;
}
const TaskItem = ({ item }: TaskItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);

  const saveInFavorites = (task: TaskCreated) => {
    // При повтроном нажатии удалять из избранного (надо давать каждой задаче уник ид и по не му удалять потом). Возможно добавлять ид в момент создания задачи
    taskStore.setTasksInFavorites(task);
    setIsFavorites(!isFavorites);
  };
  return (
    <View
      style={[
        styles.item,
        isChecked && { backgroundColor: Colors.checkedTask },
      ]}
    >
      <View style={[styles.leftLine, isChecked && { opacity: 1 }]} />
      <View style={styles.content}>
        <Checkbox checked={isChecked} onChecked={setIsChecked} />
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => setIsExpanded(prev => !prev)}
        >
          <Text style={styles.taskName}>{item.nameTask}</Text>
          {isExpanded && (
            <View>
              <Text style={styles.taskDesc}>{item.descTask}</Text>
              <Text style={styles.taskDate}>{item.selectedDate}</Text>
            </View>
          )}
        </TouchableOpacity>
        {/* Флаг + добавить в избранное */}
        <View style={styles.rightContent}>
          <Text>{item.selectedTypeTask}</Text>
          {/* Две кнопки: флаг + добавить в избранное */}
          <TouchableOpacity>
            <Icon name="flag-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => saveInFavorites(item)}>
            <Icon
              name="star-outline"
              size={20}
              color={isFavorites ? 'gold' : ''}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray,
  },
  leftLine: {
    width: 5,
    backgroundColor: '#066b0eff',
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
    color: Colors.gray,
  },
  taskDate: {
    fontSize: 10,
    fontWeight: '400',
    color: Colors.gray,
  },
  rightContent: {
    marginTop: 'auto',
    flexDirection: 'row',
  },
});
