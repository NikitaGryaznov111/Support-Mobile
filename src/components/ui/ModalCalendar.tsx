import { View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import Button from './Button';
import CalendarCustom from './CalendarCustom';

interface ModalCalendarProps {
  isModalActive: boolean;
  closeModal: () => void;
}
const ModalCalendar = ({ isModalActive, closeModal }: ModalCalendarProps) => {
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
          <CalendarCustom closeModal={closeModal}/>
        </View>
      </View>
    </Modal>
  );
};
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
export default ModalCalendar;
