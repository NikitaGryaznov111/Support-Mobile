// import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TasksList from '../../../components/features/TasksList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Calendar можно добавить*/}
      <TasksList />
    </SafeAreaView>
  );
};

export default HomeScreen;
