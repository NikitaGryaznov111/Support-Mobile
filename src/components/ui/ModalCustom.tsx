/* eslint-disable react-native/no-inline-styles */
import { View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
import Button from './Button';
import TypesTasksList from '../features/TypesTasksList';
import PriorityTasksList from '../features/PriorityTasksList';

interface ModalCustomProps {
  isModalActive: boolean;
  closeModal: () => void;
  typeModal: string;
}
export default function ModalCustom({
  isModalActive,
  closeModal,
  typeModal,
}: ModalCustomProps) {
  const saveTypeTask = () => {
    closeModal();
  };
  console.log(isModalActive);

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
              onClick={closeModal}
              icon="close"
              size={20}
              styleIcon={{ color: '#0d3488ff' }}
            />
          </View>

          {typeModal === 'typeTasks' ? (
            <TypesTasksList />
          ) : (
            <PriorityTasksList />
          )}
          <View style={[styles.containerBtnSave]}>
            <Button
              style={{ color: '#ffffff' }}
              title="Сохранить"
              onClick={saveTypeTask}
            />
          </View>
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
  containerBtnSave: {
    backgroundColor: Colors.primaryBgBtn,
    borderRadius: 20,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  containerBtnClose: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
