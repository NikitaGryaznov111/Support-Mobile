/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../shared/config/colors';
import TextInputCustom from '../../../shared/ui/TextInputCustom';
import ModalCustom from '../../../shared/ui/ModalCustom';
import CalendarModal from './CalendarModal';
import { TCategoriesTasks } from '../../../entities/task/model/types';
import { taskStore } from '../../../entities/task/model/store';
import { parseDate } from '../../../shared/lib/date-utils';

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
// TODO! Подумай, как его можно оптимизировать и обобщить, использовать рендерпропс?
const FormItem = ({
  mode,
  label,
  selectedItem,
  iconName = '',
  isModalActive = false,
  data,
  onSelect = () => {},
  value,
  setValue = () => {},
  openModal,
  closeModal = () => {},
}: IFormItemProps) => {
  useEffect(() => {
    if (taskStore.selectedDate && mode === 'calendar') {
      onSelect(parseDate(taskStore.selectedDate));
    }
    return () => {
      if (mode === 'calendar') {
        onSelect('');
      }
    };
  }, [taskStore.selectedDate]);

  const onSave = (title: string) => {
    onSelect(title);
    closeModal();
  };
  const renderItem = useCallback(
    ({ item }: { item: TCategoriesTasks }) => (
      <TouchableOpacity onPress={() => onSave(item.title)}>
        <Text style={{ color: '#0d3488ff' }}>{item.title}</Text>
      </TouchableOpacity>
    ),
    [onSave],
  );
  if (mode === 'textInput') {
    return (
      <View style={styles.item}>
        <Text style={styles.label}>{label}</Text>
        <TextInputCustom
          value={value ?? ''}
          onChange={setValue}
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
        <Icon name={iconName} />
      </TouchableOpacity>
      <ModalCustom isModalActive={isModalActive} closeModal={closeModal}>
        {mode === 'calendar' ? (
          <CalendarModal closeModal={closeModal} onSelect={onSelect} />
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
