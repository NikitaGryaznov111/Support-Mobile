import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}
const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
