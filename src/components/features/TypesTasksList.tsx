/* eslint-disable react-native/no-inline-styles */
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { typesTasks } from '../../data/tasks';

const TypesTasksList = () => {
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
      data={typesTasks}
      renderItem={renderItem}
    />
  );
};

export default TypesTasksList;

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
  },
});
