/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-vector-icons/Icon';
import { MainTabsRoutes } from '../types/navigation.types';
import { Routes } from '../constants/Routes';
import HomeScreen from '../screens/Main/TabsBottom/HomeScreen';
import SearchScreen from '../screens/Main/TabsBottom/SearchScreen';
import { Colors } from '../constants/Colors';
import CreateTaskScreen from '../screens/Main/TabsBottom/CreateTaskScreen';
import SettingsScreen from '../screens/Main/TabsBottom/SettingsScreen';
const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator<MainTabsRoutes>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primaryBg,
        },
        tabBarActiveTintColor: Colors.tabActive,
        tabBarInactiveTintColor: Colors.tabInActive,
      }}
    >
      <Tab.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calculator" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.SearchScreen}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.CreateTaskScreen}
        component={CreateTaskScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="tasks" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.SettingsScreen}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="stop" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
