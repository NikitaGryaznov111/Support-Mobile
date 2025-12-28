import { View, Text } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../store/Tasks.store';

const CompletedTasksScreen = () => {
  const tasksCompleted = taskStore.completedTasks;
  console.log(tasksCompleted);

  return (
    <View>
      <Text>CompletedTasksScreen</Text>
    </View>
  );
};

export default observer(CompletedTasksScreen);
