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
import AuthNavigation from './src/navigation/AuthNavigation';
import { Routes } from './src/constants/Routes';
import { RootRoutes } from './src/types/navigation.types';

const RootStack = createNativeStackNavigator<RootRoutes>();
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            name={Routes.AuthScreen}
            component={AuthNavigation}
          />
          {/* <RootStack.Screen name={Routes.MainScreen} component={MainNavigation} /> */}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
