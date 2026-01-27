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
  onPress: () => void;
  styleText?: StyleProp<TextStyle>;
  icon?: string;
  size?: number;
  styleIcon?: { color: string };
  styleView?: StyleProp<ViewStyle>;
  styleSelect?: StyleProp<ViewStyle>;
}
const Button = ({
  title,
  onPress,
  styleText,
  icon,
  size,
  styleIcon,
  styleView,
  styleSelect,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styleView, styleSelect]}>
        {title && <Text style={styleText}>{title}</Text>}
        {icon && <Icon name={icon} size={size} style={styleIcon} />}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
