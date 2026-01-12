/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './src/shared/config/routes';
import { RootRoutes } from './src/shared/types/navigation.types';
import DrawerNavigator from './src/app/navigation/DrawerNavigator';
import Toast from 'react-native-toast-message';
import AuthScreen from './src/pages/auth-screen';
const RootStack = createNativeStackNavigator<RootRoutes>();
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  // TODO вынеси в AppStackNavigator
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {true ? (
            <RootStack.Screen
              name={Routes.DrawerNavigator}
              component={DrawerNavigator}
            />
          ) : (
            <RootStack.Screen name={Routes.AuthScreen} component={AuthScreen} />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
      <Toast />
    </SafeAreaProvider>
  );
}
export default App;
