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
import { Colors } from '../../../shared/config/colors';
import TextInputCustom from '../../../shared/ui/TextInputCustom';
import ModalCustom from '../../../shared/ui/ModalCustom';
import CalendarCustom from './CalendarCustom';
import { TCategoriesTasks } from '../../../shared/types/tasks.types';

interface IFormItemProps {
  mode: 'textInput' | 'modal' | 'calendar';
  label: string;
  isCalendar?: boolean;
  selectedItem?: string;
  iconName?: string;
  isModalActive?: boolean;
  data?: TCategoriesTasks[];
  onSelect?: (value: string) => void;
  value?: string;
  setValue?: (value: string) => void;
  openModal?: () => void;
  closeModal?: () => void;
}
// TODO Подумай, как его можно оптимизировать и обобщить
const FormItem = ({
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
}: IFormItemProps) => {
  const onSave = (title: string) => {
    onSelect?.(title);
    closeModal?.();
  };
  const renderItem = ({ item }: { item: TCategoriesTasks }) => {
    const { title } = item;
    return (
      <TouchableOpacity onPress={() => onSave(title)}>
        <Text style={{ color: '#0d3488ff' }}>{title}</Text>
      </TouchableOpacity>
    );
  };
  if (mode === 'textInput') {
    return (
      <View style={styles.item}>
        <Text style={styles.label}>{label}</Text>
        <TextInputCustom
          value={value ? value : ''}
          onChange={() => setValue}
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
        closeModal={() => closeModal}
      >
        {mode === 'calendar' ? (
          <CalendarCustom
            closeModal={() => closeModal}
            onSelect={() => onSelect}
          />
        ) : (
          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
          />
        )}
      </ModalCustom>
    </View>
  );
};

export default FormItem;

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
