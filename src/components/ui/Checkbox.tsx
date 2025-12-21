import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Colors } from '../../constants/Colors';

interface CheckboxProps {
  checked: boolean;
  onChecked: () => void;
}
const Checkbox = ({ checked, onChecked }: CheckboxProps) => {
  return (
    <TouchableOpacity
      style={[styles.checkbox, checked && styles.checked]}
      onPress={onChecked}
    >
      {checked && <Icon name="checkmark" size={16} color={Colors.White} />}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1.3,
    marginRight: 15,
    borderRadius: 10,
    borderColor: Colors.Gray,
  },
  checked: {
    backgroundColor: Colors.Gray,
    opacity: 0.8,
    borderWidth: 0,
  },
});
