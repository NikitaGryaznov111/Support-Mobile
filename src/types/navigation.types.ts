// типизация маршрутов и их параметров
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootRoutes = {
  AuthScreen: undefined;
  Drawer: undefined;
};
export type DrawerRoutes = {
  MainTabNavigator: undefined;
};
export type MainTabsRoutes = {
  DrawerFakeScreen: undefined;
  TasksScreen: undefined;
  CalendarScreen: undefined;
  SettingsScreen: undefined;
};
export type TasksStackRoutes = {
  TasksScreen: undefined;
  CompletedTasksScreen: undefined;
};
export type TasksNavigateProps = NativeStackNavigationProp<TasksStackRoutes>;
