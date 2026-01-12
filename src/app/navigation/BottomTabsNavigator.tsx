/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomTabsRoutes } from '../../shared/types/navigation.types';
import { Routes } from '../../shared/config/routes';
import { Colors } from '../../shared/config/colors';
import DrawerFakeScreen from '../../pages/drawer-fake-screen';
import TasksNavigator from './TasksNavigator';
import CalendarScreen from '../../pages/calendar-screen';
import SettingsScreen from '../../pages/settings-screen';
// TODO Сделай общий Container

const BottomTabsNavigator = () => {
  const Tab = createBottomTabNavigator<BottomTabsRoutes>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.BlueD,
          height: 60,
        },
        tabBarActiveTintColor: Colors.White,
        tabBarInactiveTintColor: Colors.GrayL,
        tabBarShowLabel: true,
      }}
      initialRouteName={Routes.TasksScreen}
    >
      <Tab.Screen
        name={Routes.DrawerFakeScreen}
        component={DrawerFakeScreen}
        options={({ navigation }) => ({
          tabBarButton: props => (
            <TouchableWithoutFeedback
              accessibilityRole={props.accessibilityRole}
              accessibilityState={props.accessibilityState}
              testID={props.testID}
              onPress={() => (navigation as any).openDrawer()}
            >
              <View style={props.style}>
                <Icon
                  name="menu"
                  size={30}
                  color={
                    props.accessibilityState?.selected
                      ? Colors.White
                      : Colors.GrayL
                  }
                />
              </View>
            </TouchableWithoutFeedback>
          ),
        })}
      />

      <Tab.Screen
        name={Routes.TasksScreen}
        component={TasksNavigator}
        options={{
          title: 'Задания',
          tabBarIcon: ({ color }) => (
            <Icon name="reader-outline" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.CalendarScreen}
        component={CalendarScreen}
        options={{
          title: 'Календарь',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar-outline" size={27} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.SettingsScreen}
        component={SettingsScreen}
        options={{
          title: 'Настройки',
          tabBarIcon: ({ color }) => (
            <Icon name="settings-sharp" color={color} size={27} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
