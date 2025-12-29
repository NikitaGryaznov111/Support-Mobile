import { FlatList } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../store/Tasks.store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TTask } from '../../types/tasks.types';
import CompletedTaskItem from '../../components/features/CompletedTaskItem';

const CompletedTasksScreen = () => {
  const tasksCompleted = taskStore.completedTasks;
  const renderItem = ({ item }: { item: TTask }) => {
    return <CompletedTaskItem item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        renderItem={renderItem}
        data={tasksCompleted}
        keyExtractor={item => item.id}
        // extraData={taskCount}
      />
    </SafeAreaView>
  );
};

export default observer(CompletedTasksScreen);
