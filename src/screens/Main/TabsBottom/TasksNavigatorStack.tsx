import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TasksStackRoutes } from '../../../types/navigation.types';
import { Routes } from '../../../constants/Routes';
import CompletedTasksScreen from '../../Tasks/CompletedTasksScreen';
import TasksScreen from '../../Tasks/TasksScreen';

const TasksNavigatorStack = () => {
  const Stack = createNativeStackNavigator<TasksStackRoutes>();
  return (
    <Stack.Navigator initialRouteName={Routes.TasksScreen}>
      <Stack.Screen
        name={Routes.TasksScreen}
        component={TasksScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.CompletedTasksScreen}
        component={CompletedTasksScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
          contentStyle: {
            marginTop: -30,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default TasksNavigatorStack;
