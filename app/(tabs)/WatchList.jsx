import { View, Text } from 'react-native'
import React from 'react'
import WatchedData from '../../components/WatchedData'

const WatchList = () => {
  return (
    <View className='flex-1 bg-black mt-[10%]'>
     <WatchedData/>
    </View>
  )
}

export default WatchList