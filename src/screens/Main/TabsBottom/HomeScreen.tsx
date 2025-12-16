/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TasksList from '../../../components/features/TasksList';
import Burger from '../../../components/ui/Burger';
import { DrawerRoutes } from '../../../types/navigation.types';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface HomeScreenProps {
  navigation: DrawerNavigationProp<DrawerRoutes, 'HomeScreen'>;
}
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Calendar можно добавить*/}
      <Burger onPress={() => navigation.toggleDrawer()} />
      <TasksList />
    </SafeAreaView>
  );
};

export default HomeScreen;
