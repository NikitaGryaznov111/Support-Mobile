import { Text, View } from 'react-native';
import React from 'react';
import { TTask } from '../../types/tasks.types';
import { observer } from 'mobx-react-lite';

interface TaskInFavoritesProps {
  item: TTask;
}
const TaskInFavorites = ({ item }: TaskInFavoritesProps) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export default observer(TaskInFavorites);

// const styles = StyleSheet.create({});
