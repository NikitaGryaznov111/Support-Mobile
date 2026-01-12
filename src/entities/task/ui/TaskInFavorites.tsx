import { Text, View } from 'react-native';
import React from 'react';
import { TTask } from '../../../shared/types/tasks.types';
import { observer } from 'mobx-react-lite';

interface ITaskInFavoritesProps {
  item: TTask;
}
const TaskInFavorites = ({ item }: ITaskInFavoritesProps) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export default observer(TaskInFavorites);
