/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import MainTabNavigator from './MainTabNavigator';
import FavoritesScreen from '../screens/Drawer/FavoritesScreen';

const Drawer = createDrawerNavigator({
  screens: {
    MainTabNavigator: MainTabNavigator,
    FavoritesScreen: FavoritesScreen,
  },
});

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Главная"
        component={MainTabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="home-outline" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Избранное"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="heart-outline" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
