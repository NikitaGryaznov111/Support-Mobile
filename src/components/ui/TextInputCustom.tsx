/* eslint-disable react-native/no-inline-styles */
import React, { Dispatch, SetStateAction } from 'react';
import { StyleProp, TextInput, TextStyle, View } from 'react-native';

interface TextInputCustomProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  style?: StyleProp<TextStyle>;
}
const TextInputCustom = ({ onChange, value, style }: TextInputCustomProps) => {
  return (
    <View style={[style]}>
      <TextInput
        style={{ color: '#ffffff' }}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default TextInputCustom;
