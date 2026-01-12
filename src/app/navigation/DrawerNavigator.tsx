/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabsNavigator from './BottomTabsNavigator';
import FavoritesScreen from '../../pages/favorites-screen';

const Drawer = createDrawerNavigator({
  screens: {
    BottomTabsNavigator: BottomTabsNavigator,
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
        component={BottomTabsNavigator}
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
          headerShown: true,
          title: 'Избранное',
          headerStyle: {
            backgroundColor: 'transparent',
            shadowColor: 'transparent',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
