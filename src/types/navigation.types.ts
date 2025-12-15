// типизация маршрутов и их параметров
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../constants/Routes';

export type RootRoutes = {
  AuthScreen: undefined;
  MainTabs: undefined;
};

export type MainTabsRoutes = {
  HomeTab: { screen: Routes };
  SearchScreen: undefined;
  CreateTaskScreen: undefined;
  SettingsScreen: undefined;
};

export type NavigateProps = NativeStackNavigationProp<MainTabsRoutes>;
