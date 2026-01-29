import { FlatList } from 'react-native';
import React from 'react';
import { TTask } from '../../shared/types/tasks.types';
import { observer } from 'mobx-react-lite';
import TaskInFavorites from '../../entities/task/ui/TaskInFavorites';
import { taskStore } from '../../entities/task/model/store';

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
