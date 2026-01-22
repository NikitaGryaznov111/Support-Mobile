/* eslint-disable react-native/no-inline-styles */
import { View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../config/colors';
import Button from './Button';

interface IModalCustomProps {
  isModalActive: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}
export default function ModalCustom({
  isModalActive,
  closeModal,
  children,
}: IModalCustomProps) {
  // TODO разберись почему много ререндеров
  console.log('рендер ModalCustom');
  return (
    <Modal
      animationType="slide"
      visible={isModalActive}
      transparent={true}
      onRequestClose={closeModal}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={closeModal}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.content}>
          <View style={[styles.containerBtnClose]}>
            <Button
              onPress={closeModal}
              icon="close"
              size={20}
              styleIcon={{ color: '#0d3488ff' }}
            />
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: Colors.bgModal,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    width: '80%',
    backgroundColor: Colors.bgModalContent,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    borderRadius: 15,
  },
  containerBtnClose: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
