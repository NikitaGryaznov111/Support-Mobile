/* eslint-disable react-native/no-inline-styles */
import { TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface BurgerProps {
  onPress: () => void;
}
const Burger = ({ onPress }: BurgerProps) => {
  return (
    <View style={{ paddingLeft: 15, paddingTop: 5 }}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon name="menu" size={25} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Burger;
