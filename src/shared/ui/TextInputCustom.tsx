import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import { Colors } from '../config/colors';

interface TextInputCustomProps {
  value: string;
  onChange: (value: string) => void;
  style?: StyleProp<TextStyle>;
  colorText?: { color: string };
}
const TextInputCustom = ({
  onChange,
  value,
  style,
  colorText,
}: TextInputCustomProps) => {
  return (
    <View style={[style]}>
      <TextInput
        style={[colorText ? colorText : { color: Colors.White }, styles.input]}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 0,
    height: 20,
  },
});
export default TextInputCustom;
