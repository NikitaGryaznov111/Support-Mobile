import { View, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import Button from '../components/ui/Button';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../constants/Routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthRoutes } from '../types/navigation.types';

const SignIn = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<AuthRoutes>>();
  return (
    <ImageBackground
      source={require('../assets/image/backgroundAuth.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* для кнопок */}
          <View>
            <Button
              title="SIGN IN"
              onClick={() => navigate(Routes.SignInScreen)}
            />
            <Button
              title="SIGN UP"
              onClick={() => navigate(Routes.SignUpScreen)}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(19, 25, 49, 0.3)',
  },
  container: {
    paddingTop: 60,
  },
});
export default SignIn;
