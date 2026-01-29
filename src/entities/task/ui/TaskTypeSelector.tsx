import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../../../shared/ui/Button';
import { Colors } from '../../../shared/config/colors';
import { typesTasks, EnumerationTypesTasks } from '../config/task.config';
import { taskStore } from '../model/store';

const TaskTypeSelector = () => {
  const [selectedIndexTypeTask, setSelectedIndexTypeTask] =
    useState<null | EnumerationTypesTasks>(null);

  const onPress = (id: number | null, title: string | null) => {
    setSelectedIndexTypeTask(id);
    taskStore.setSelectedFilterType(title);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Button
            title="Все"
            onPress={() => onPress(null, null)}
            styleView={styles.button}
            styleText={
              selectedIndexTypeTask === null
                ? { color: Colors.White }
                : { color: Colors.Black }
            }
            styleSelect={
              selectedIndexTypeTask === null ? styles.selectButton : null
            }
          />
          {typesTasks.map(type => (
            <Button
              title={type.title}
              onPress={() => onPress(type.id, type.title)}
              styleView={styles.button}
              styleSelect={
                selectedIndexTypeTask === type.id ? styles.selectButton : null
              }
              styleText={
                selectedIndexTypeTask === type.id
                  ? { color: Colors.White }
                  : { color: Colors.Black }
              }
              key={type.id}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskTypeSelector;

const styles = StyleSheet.create({
  outerContainer: {
    height: 40,
  },
  container: {
    flexDirection: 'row',
    columnGap: 12,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  button: {
    backgroundColor: Colors.BlueLLL,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 10,
  },
  selectButton: {
    backgroundColor: Colors.BlueD,
  },
});
