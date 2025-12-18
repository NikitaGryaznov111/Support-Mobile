// типизация маршрутов и их параметров
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootRoutes = {
  AuthScreen: undefined;
  Drawer: undefined;
};

export type MainTabsRoutes = {
  DrawerFakeScreen: undefined;
  HomeScreen: undefined;
  CalendarScreen: undefined;
  SettingsScreen: undefined;
};
export type DrawerRoutes = {
  MainTabNavigator: undefined;
};
export type NavigateProps = NativeStackNavigationProp<MainTabsRoutes>;
