import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabsRoutes } from '../types/navigation.types';
import { Routes } from '../constants/Routes';
import HomeScreen from '../screens/Main/Home.screen';

const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator<MainTabsRoutes>();
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.HomeScreen} component={HomeScreen} />
      {/* <Tab.Screen />
      <Tab.Screen /> */}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
