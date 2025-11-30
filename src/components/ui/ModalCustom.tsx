/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';
import Button from './Button';

interface ModalCustomProps {
  isModalActive: boolean;
  closeModal: () => void;
  data: string[];
  onSelect: (value: string) => void;
}
export default function ModalCustom({
  isModalActive,
  closeModal,
  data,
  onSelect,
}: ModalCustomProps) {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const saveTypeTask = () => {
    onSelect(selectedItem);
    closeModal();
  };

  const renderItem = ({ item }: { item: string }) => {
    const isSelected = selectedItem === item;
    return (
      <TouchableOpacity
        onPress={() => setSelectedItem(item)}
        style={isSelected ? styles.selectedItem : null}
      >
        <Text
          style={
            isSelected ? { color: Colors.primaryText } : { color: '#0d3488ff' }
          }
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
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

          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item}
          />
          <View style={[styles.containerBtnSave]}>
            <Button
              styleText={{ color: '#ffffff' }}
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
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
  },
  selectedItem: {
    backgroundColor: Colors.primaryBgBtn,
    width: 150,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0b3ca6ff',
  },
});
