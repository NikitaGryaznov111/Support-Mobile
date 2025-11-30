import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface ButtonProps {
  title?: string;
  onClick: () => void;
  styleText?: StyleProp<TextStyle>;
  icon?: string;
  size?: number;
  styleIcon?: { color: string };
  styleView?: ViewStyle;
}
const Button = ({
  title,
  onClick,
  styleText,
  icon,
  size,
  styleIcon,
  styleView,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styleView}>
        {title && <Text style={styleText}>{title}</Text>}
        {icon && <Icon name={icon} size={size} style={styleIcon} />}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
