import { View, Text } from 'react-native'
import React from 'react'
import UserIntro from '../../components/profile/UserIntro'
import MenuList from '../../components/profile/MenuList'


const profile = () => {

  return (
    <View className='p-5'>
      <Text style={{fontFamily:'outfit-bold',fontSize:35}}>profile</Text>
      <UserIntro/>
      <MenuList/>
    </View>
  )
}

export default profile