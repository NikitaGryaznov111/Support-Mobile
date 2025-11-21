import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TextInputCustom from '../ui/TextInputCustom';
import { Colors } from '../../constants/Colors';

const FormCreateTask = () => {
  const [nameTask, setNameTask] = useState<string>('');
  const [descTask, setDescTask] = useState<string>('');
  const [dateTask, setDateTask] = useState<string>('');
  //   const [isModakActive, setIsModakActive] = useState<boolean>(false)

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.label}>Тип задачи</Text>
        <TouchableOpacity style={styles.dropDown}>
          <Text>Дневная</Text>
          <Icon name="chevron-down" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Приоритет</Text>
        <TouchableOpacity style={styles.dropDown}>
          <Text>Средний</Text>
          <Icon name="chevron-down" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Имя задачи</Text>
        <TextInputCustom value={nameTask} onChange={setNameTask} colorText={{color:Colors.TextCreateTask}}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Описание задачи</Text>
        <TextInputCustom value={descTask} onChange={setDescTask} colorText={{color:Colors.TextCreateTask}}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Дата</Text>
        <TextInputCustom value={dateTask} onChange={setDateTask} colorText={{color:Colors.TextCreateTask}}/>
      </View>
    </View>
  );
};

export default FormCreateTask;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingTop:20
  },
    container: {
    marginBottom: 10,
    width: '100%',
    borderBottomWidth:1,
    paddingBottom:5,
    borderBottomColor:Colors.bottomLine

  },

  dropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
label:{
    color:Colors.label,
    marginBottom:5
}
});
