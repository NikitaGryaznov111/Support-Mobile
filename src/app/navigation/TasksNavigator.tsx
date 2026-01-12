import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TasksStackRoutes } from '../../shared/types/navigation.types';
import { Routes } from '../../shared/config/routes';
import TasksScreen from '../../pages/tasks-screen';
import completedTasksScreen from '../../pages/completed-tasks-screen';

const TasksNavigator = () => {
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
        component={completedTasksScreen}
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

export default TasksNavigator;
