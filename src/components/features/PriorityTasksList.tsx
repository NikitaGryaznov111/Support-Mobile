/* eslint-disable react-native/no-inline-styles */
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { priorityTasks } from '../../data/tasks';

const PriorityTasksList = () => {
  const renderItem = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity>
        <Text style={{ color: '#0d3488ff' }}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={priorityTasks}
      renderItem={renderItem}
    />
  );
};

export default PriorityTasksList;

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
  },
});
