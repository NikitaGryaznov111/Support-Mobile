/* eslint-disable react-native/no-inline-styles */
import React, { Dispatch, SetStateAction } from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle, View } from 'react-native';

interface TextInputCustomProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  style?: StyleProp<TextStyle>;
  colorText?: {color:string}
}
const TextInputCustom = ({ onChange, value, style, colorText}: TextInputCustomProps) => {
  return (
    <View style={[style]}>
      <TextInput
        style={[colorText ? colorText : {color:'#ffffff'}, styles.input]}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input:{
    padding: 0, 
    height:20
  }
})
export default TextInputCustom;
