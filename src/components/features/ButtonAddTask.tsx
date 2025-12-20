/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../ui/Button';
import ModalCustom from '../ui/ModalCustom';
import FormCreateTask from './FormCreateTask';
import { Colors } from '../../constants/Colors';

const ButtonAddTask = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <View style={{ marginRight: 20, marginTop: 'auto' }}>
      <Button
        icon="add"
        onClick={() => setIsModalActive(true)}
        styleIcon={{ color: Colors.White }}
        size={20}
        styleView={styles.button}
      />
      <ModalCustom
        isModalActive={isModalActive}
        closeModal={() => setIsModalActive(false)}
      >
        <FormCreateTask closeForm={() => setIsModalActive(false)} />
      </ModalCustom>
    </View>
  );
};

export default ButtonAddTask;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.BlueLL,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'flex-end',
    elevation: 4,
  },
});
