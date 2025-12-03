// типизация маршрутов и их параметров
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootRoutes = {
  AuthScreen: undefined;
  MainTabs: undefined;
};

export type MainTabsRoutes = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  CreateTaskScreen: undefined;
  SettingsScreen: undefined;
};

export type NavigateProps = NativeStackNavigationProp<MainTabsRoutes>;
