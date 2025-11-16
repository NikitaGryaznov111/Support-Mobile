import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn.screen';
import SignUp from '../screens/SignUp.screen';
import { View } from 'react-native';
import { Routes } from '../constants/Routes';
import { AuthRoutes } from '../types/navigation.types';

const Stack = createNativeStackNavigator<AuthRoutes>();
const AuthNavigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.SignInScreen} component={SignIn} />
        <Stack.Screen name={Routes.SignUpScreen} component={SignUp} />
      </Stack.Navigator>
    </View>
  );
};

export default AuthNavigation;
