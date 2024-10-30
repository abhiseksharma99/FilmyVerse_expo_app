import { View, Text } from 'react-native'
import React from 'react'
import UpperProfile from '../../components/UpperProfile'
import LowerProfile from '../../components/LowerProfile'

const Profile = () => {
  return (
    <View className='bg-black flex-1 mt-[10%]'>
      <UpperProfile/>
      <LowerProfile/>
    </View>
  )
}

export default Profile