import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '../../store/Tasks.store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TTask } from '../../types/tasks.types';
import CompletedTaskItem from '../../components/features/CompletedTaskItem';

const CompletedTasksScreen = () => {
  const { completedTasks } = taskStore;
  const renderItem = ({ item }: { item: TTask }) => {
    return <CompletedTaskItem item={item} />;
  };

  return (
    <SafeAreaView style={{flex:1}}>
      {completedTasks.length ? (
        <FlatList
          renderItem={renderItem}
          data={completedTasks}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={{ fontWeight: '500' }}>
            Отсутствуют выполненные задачи
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default observer(CompletedTasksScreen);
const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    justifyContent:'center',
    flex:1
  },
});
