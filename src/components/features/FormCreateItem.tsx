import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import TextInputCustom from '../ui/TextInputCustom';
import ModalCalendar from '../ui/ModalCalendar';
import ModalCustom from '../ui/ModalCustom';

interface FormCreateItemProps {
  mode: 'textInput' | 'modal';
  label: string;
  typeModal?: 'typeTasks' | 'calendar' | 'priorityTasks';
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
  typeModal,
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
  return mode === 'textInput' ? (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInputCustom
        value={value!}
        onChange={setValue!}
        colorText={{ color: Colors.BlueDDD }}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.dropDown} onPress={openModal}>
        <Text style={{ color: Colors.BlueDDD }}>{selectedItem}</Text>
        <Icon name={iconName!} />
      </TouchableOpacity>
      {typeModal !== 'calendar' ? (
        <ModalCustom
          isModalActive={isModalActive!}
          closeModal={closeModal!}
          data={data!}
          onSelect={onSelect!}
        />
      ) : (
        <ModalCalendar
          isModalActive={isModalActive!}
          closeModal={closeModal!}
          onSelect={onSelect!}
        />
      )}
    </View>
  );
};

export default FormCreateItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
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
