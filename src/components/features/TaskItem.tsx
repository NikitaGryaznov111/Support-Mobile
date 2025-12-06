import { Text, View } from 'react-native';
import React from 'react';
import { TaskCreated } from '../../types/tasks.types';

interface TaskItemProps {
  item: TaskCreated;
}
const TaskItem = ({ item }: TaskItemProps) => {
  return (
    <View>
      {/* <Checkbox/> */}
      <View>
        <Text>{item.nameTask}</Text>
        <Text>{item.descTask}</Text>
        <Text>{item.selectedDate}</Text>
      </View>
      {/* Флаг + добавить в избранное */}
      <View>
        <Text>{item.selectedTypeTask}</Text>
        {/* Две кнопки: флаг + добавить в избранное */}
      </View>
    </View>
  );
};

export default TaskItem;

// const styles = StyleSheet.create({

// })
