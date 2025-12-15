import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Colors } from '../../constants/Colors';

interface CheckboxProps {
  checked: boolean;
  onChecked: (value: boolean) => void;
}
const Checkbox = ({ checked, onChecked }: CheckboxProps) => {
  return (
    <TouchableOpacity
      style={[styles.checkbox, !checked && { borderColor: Colors.Gray }]}
      onPress={() => onChecked(!checked)}
    >
      {checked && <Icon name="checkmark" size={19} color="#414040ff" />}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3d3d3dff',
    marginRight: 15,
    borderRadius: 4,
  },
});
