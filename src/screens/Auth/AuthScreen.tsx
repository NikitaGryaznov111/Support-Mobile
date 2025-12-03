/* eslint-disable react-native/no-inline-styles */
import { View, ImageBackground, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import { Colors } from '../../constants/Colors';
import FormAuth from '../../components/ui/FormAuth';

const AuthScreen = () => {
  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn');

  return (
    <ImageBackground
      source={require('../../assets/image/backgroundAuth.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* для кнопок */}
          <View style={styles.buttons}>
            <Button
              title="SIGN IN"
              onClick={() => {
                setMode('signIn');
              }}
              styleText={[
                mode === 'signIn'
                  ? styles.activeButton
                  : { color: Colors.primaryTextAuth },
                { fontWeight: '500' },
              ]}
            />
            <Button
              title="SIGN UP"
              onClick={() => {
                setMode('signUp');
              }}
              styleText={[
                mode === 'signUp'
                  ? styles.activeButton
                  : { color: Colors.primaryTextAuth },
                { fontWeight: '500' },
              ]}
            />
          </View>
          {/* форма */}
          <FormAuth mode={mode} />
          {/* нижнее подчеркивание */}
          <View style={styles.bottomLine} />
          <View />
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
    backgroundColor: 'rgba(32,28,61, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingVertical: 60,
    paddingHorizontal: 30,
    width: '80%',
    height: '80%',
  },
  buttons: {
    flexDirection: 'row',
    columnGap: 25,
    marginBottom: 40,
  },
  activeButton: {
    color: '#ffffff',
    borderBottomWidth: 2,
    borderBottomColor: Colors.primaryBgBtn,
    paddingBottom: 3,
  },
  bottomLine: {
    height: 1,
    backgroundColor: '#b1b8d1ff',
    marginTop: 100,
  },
});
export default AuthScreen;
