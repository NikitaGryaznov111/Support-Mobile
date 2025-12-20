/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import TextInputCustom from '../ui/TextInputCustom';
import ModalCustom from '../ui/ModalCustom';
import CalendarCustom from '../ui/CalendarCustom';

interface FormCreateItemProps {
  mode: 'textInput' | 'modal' | 'calendar';
  label: string;
  isCalendar?: boolean;
  selectedItem?: string;
  iconName?: string;
  isModalActive?: boolean;
  data?: string[];
  onSelect?: (value: string) => void;
  value?: string;
  setValue?: (value: string) => void;
  openModal?: () => void;
  closeModal?: () => void;
}
const FormCreateItem = ({
  mode,
  label,
  selectedItem,
  iconName,
  isModalActive,
  data,
  onSelect,
  value,
  setValue,
  openModal,
  closeModal,
}: FormCreateItemProps) => {
  const onSave = (item: string) => {
    onSelect?.(item);
    closeModal?.();
  };
  const renderItem = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity onPress={() => onSave(item)}>
        <Text style={{ color: '#0d3488ff' }}>{item}</Text>
      </TouchableOpacity>
    );
  };
  if (mode === 'textInput') {
    return (
      <View style={styles.item}>
        <Text style={styles.label}>{label}</Text>
        <TextInputCustom
          value={value ? value : ''}
          onChange={setValue ?? (() => {})}
          colorText={{ color: Colors.BlueDDD }}
        />
      </View>
    );
  }
  return (
    <View style={styles.item}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.dropDown} onPress={openModal}>
        <Text style={{ color: Colors.BlueDDD }}>{selectedItem}</Text>
        <Icon name={iconName ? iconName : ''} />
      </TouchableOpacity>
      <ModalCustom
        isModalActive={isModalActive ?? false}
        closeModal={closeModal ?? (() => {})}
      >
        {mode === 'calendar' ? (
          <CalendarCustom
            closeModal={closeModal ?? (() => {})}
            onSelect={onSelect ?? (() => {})}
          />
        ) : (
          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${item}-${index}`}
          />
        )}
      </ModalCustom>
    </View>
  );
};

export default FormCreateItem;

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
  },
  item: {
    marginBottom: 10,

    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: Colors.BlueDD,
  },

  dropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: Colors.GrayD,
    marginBottom: 5,
  },
});
