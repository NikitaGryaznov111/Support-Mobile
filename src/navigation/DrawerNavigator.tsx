/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Routes } from '../constants/Routes';
import FavoritesScreen from '../screens/Drawer/FavoritesScreen';
import HomeScreen from '../screens/Main/TabsBottom/HomeScreen';

const Drawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Favorites: FavoritesScreen,
  },
});

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'transparent',
          shadowColor: 'transparent',
          height: 50,
        },
        headerTitleContainerStyle: {
          marginHorizontal: 0,
        },
        headerLeftContainerStyle: {
          paddingTop: 20,
        },
        drawerStyle: {
          width: 250,
        },
      }}
      initialRouteName={Routes.HomeScreen}
    >
      <Drawer.Screen
        name={Routes.FavoritesScreen}
        component={FavoritesScreen}
        options={{
          drawerLabel: 'Избранное',
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              color={color}
              size={size}
              name={focused ? 'heart' : 'heart-outline'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={{
          drawerLabel: 'Задачи',
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              color={color}
              size={size}
              name={focused ? 'home' : 'home-outline'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
