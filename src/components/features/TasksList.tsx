import React from 'react'
import { FlashList } from '@shopify/flash-list'
import { observer } from 'mobx-react-lite'
import { taskStore } from '../../store/Tasks.store'
import { Text } from 'react-native'
import { TaskCreated } from '../../types/tasks.types'

const TasksList = () => {
const {tasksList} = taskStore
    const renderItem = ({item}:{item:TaskCreated}) =>{
        return <Text>{item.selectedTypeTask}</Text>
    }

  return (
    // @ts-ignore

    <FlashList renderItem={renderItem} data={tasksList} estimatedItemSize={60}/>
  )
}

export default observer(TasksList)