import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface ButtonProps {
  title?: string;
  onClick: () => void;
  style?: StyleProp<TextStyle>;
  icon?: string;
  size?: number;
  styleIcon?: { color: string };
}
const Button = ({
  title,
  onClick,
  style,
  icon,
  size,
  styleIcon,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      {title && <Text style={style}>{title}</Text>}
      {icon && <Icon name={icon} size={size} style={styleIcon} />}
    </TouchableOpacity>
  );
};

export default Button;
