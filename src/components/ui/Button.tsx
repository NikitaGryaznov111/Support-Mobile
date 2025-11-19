import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
  style?: StyleProp<TextStyle>;
}
const Button = ({ title, onClick, style }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
