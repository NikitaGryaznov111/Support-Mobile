import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../store/Tasks.store';
import { FlatList } from 'react-native';
import { TaskCreated } from '../../types/tasks.types';
import TaskItem from './TaskItem';

const TasksList = () => {
  const { tasksList } = taskStore;
  console.log(tasksList);

  const renderItem = ({ item }: { item: TaskCreated }) => {
    return <TaskItem item={item} />;
  };

  return <FlatList renderItem={renderItem} data={tasksList} />;
};

export default observer(TasksList);
