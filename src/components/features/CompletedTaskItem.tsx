import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TTask } from '../../types/tasks.types'
import { Colors } from '../../constants/Colors'
import Checkbox from '../ui/Checkbox'

interface ICompletedTaskItemProps {
item:TTask
}
const CompletedTaskItem = ({item}:ICompletedTaskItemProps) => {
      const [isChecked, setIsChecked] = useState(false);
      const [isExpanded, setIsExpanded] = useState(false);
    const { name, type, desc, date, id } = item;
      const onChecked = () => {
        setIsChecked(prev => !prev);
      };
  return (
    <View
      style={[styles.item, isChecked && { backgroundColor: Colors.GrayLL }]}
    >
      <View style={styles.content}>
        <Checkbox checked={isChecked} onChecked={onChecked} />
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => setIsExpanded(prev => !prev)}
        >
          <Text style={styles.taskName}>{name}</Text>
          {isExpanded && (
            <View>
              {desc && <Text style={styles.taskDesc}>{desc}</Text>}
              {date && <Text style={styles.taskDate}>{date}</Text>}
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CompletedTaskItem

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.Gray,
    alignItems: 'center',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  taskName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  taskDesc: {
    fontSize: 12,
    fontWeight: '400',
  },
  taskDate: {
    fontSize: 10,
    fontWeight: '400',
  },
  typeTask: {
    fontSize: 11,
    alignSelf: 'flex-end',
  },
});