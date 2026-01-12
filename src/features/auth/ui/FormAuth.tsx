/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Button from '../../../shared/ui/Button';
import TextInputCustom from '../../../shared/ui/TextInputCustom';
import { Colors } from '../../../shared/config/colors';

interface IFormAuthProps {
  mode: string;
}
const FormAuth = ({ mode }: IFormAuthProps) => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return (
    <View>
      {mode === 'signUp' ? (
        <>
          <Text style={styles.text}>EMAIL</Text>
          <TextInputCustom
            style={[styles.textInput]}
            value={email}
            onChange={setEmail}
          />
        </>
      ) : null}
      <Text style={styles.text}>USERNAME</Text>
      <TextInputCustom
        style={[styles.textInput]}
        value={name}
        onChange={setName}
      />
      <Text style={styles.text}>PASSWORD</Text>
      <TextInputCustom
        style={styles.textInput}
        value={password}
        onChange={setPassword}
      />
      <View style={[styles.containerBtn]}>
        <Button
          styleText={{ color: Colors.White, fontWeight: '600' }}
          title={mode === 'signIn' ? 'SIGN IN' : 'SIGN UP'}
          onClick={() => {}}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.GrayD,
    paddingHorizontal: 10,
    borderRadius: 20,
    height: 35,
  },
  containerBtn: {
    backgroundColor: Colors.BlueD,
    borderRadius: 20,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 10,
    color: Colors.GrayLL,
    marginBottom: 8,
    marginTop: 10,
  },
});
export default FormAuth;
