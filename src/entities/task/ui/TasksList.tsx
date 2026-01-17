/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TTask } from '../../../shared/types/tasks.types';
import TaskItem from './TaskItem';
import { Colors } from '../../../shared/config/colors';
import Button from '../../../shared/ui/Button';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../shared/config/routes';
import { TasksNavigateProps } from '../../../shared/types/navigation.types';
import { taskStore } from '../model/task.store';
// TODO МОЖНО ЕМУ ПРИНИМАТЬ ДЖЕНЕРИК, РАЗНЫЙ ТИП СПИСКА ЗАДАЧ, ЕСЛИ КАЖДЫЙ ТИП БУДЕТ РАЗНОЙ СТРУКТОРОЙ ДАННЫХ. НО ЭТО ВРЯД ЛИ
const TasksList = () => {
  const { navigate } = useNavigation<TasksNavigateProps>();
  const tasks = taskStore.tasksList;
  const { completedTasks } = taskStore;

  const renderItem = ({ item }: { item: TTask }) => {
    return <TaskItem item={item} />;
  };

  const renderFooter = () => {
    return completedTasks.length ? (
      <Button
        onPress={() => navigate(Routes.CompletedTasksScreen)}
        title="Посмотреть выполненные задачи"
        styleText={{ color: Colors.Gray }}
        styleView={styles.footerButton}
      />
    ) : null;
  };

  return tasks.length ? (
    <FlatList
      renderItem={renderItem}
      data={tasks}
      keyExtractor={item => item.id}
      extraData={completedTasks.length}
      ListFooterComponent={renderFooter}
    />
  ) : (
    <View style={styles.emptyContainer}>
      <Text style={{ fontWeight: '500' }}>Отсутствуют добавленные задачи</Text>
      {completedTasks.length ? (
        <Button
          onPress={() => navigate(Routes.CompletedTasksScreen)}
          title="Посмотреть выполненные задачи"
          styleText={{ color: Colors.Gray }}
          styleView={styles.footerButton}
        />
      ) : null}
    </View>
  );
};

export default observer(TasksList);
const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  footerButton: {
    alignItems: 'center',
    marginTop: 10,
  },
});
