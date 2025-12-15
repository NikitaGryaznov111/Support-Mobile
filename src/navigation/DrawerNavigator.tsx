import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from '../constants/Routes';
import FavoritesScreen from '../screens/Drawer/FavoritesScreen';
import HomeScreen from '../screens/Main/TabsBottom/HomeScreen';

const Drawer = createDrawerNavigator();
// TODO Сделай кастомный контейнер
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        headerShown: true,
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
      }}
      initialRouteName={Routes.HomeScreen}
    >
      <Drawer.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Drawer.Screen
        name={Routes.FavoritesScreen}
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
}
