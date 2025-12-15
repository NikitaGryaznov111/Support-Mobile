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
import { Routes } from './src/constants/Routes';
import { RootRoutes } from './src/types/navigation.types';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import AuthScreen from './src/screens/Auth/AuthScreen';
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
          {true ? (
            <RootStack.Screen
              name={Routes.MainTabs}
              component={MainTabNavigator}
            />
          ) : (
            <RootStack.Screen name={Routes.AuthScreen} component={AuthScreen} />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: 'red' }}>
//       <Text>TEST</Text>
//     </View>
//   );
// }
