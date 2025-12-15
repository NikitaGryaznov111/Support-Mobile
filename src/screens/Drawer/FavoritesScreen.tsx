import { FlatList } from 'react-native';
import React from 'react';
import { taskStore } from '../../store/Tasks.store';
import { TTask } from '../../types/tasks.types';
import { observer } from 'mobx-react-lite';
import TaskInFavorites from '../../components/features/TaskInFavorites';

const FavoritesScreen = () => {
  const renderItem = ({ item }: { item: TTask }) => {
    return <TaskInFavorites item={item} />;
  };
  const tasks = taskStore.tasksInFavorites;
  const taskCount = tasks.length;
  return (
    <FlatList
      data={taskStore.tasksInFavorites}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      extraData={taskCount}
    />
  );
};

export default observer(FavoritesScreen);
