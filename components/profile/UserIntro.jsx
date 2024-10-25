import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { useUser } from '@clerk/clerk-expo';

const UserIntro = () => {

    const {user} = useUser();

  return (
    <View className='flex items-center justify-center mt-5'>
      <Image source={{uri:user?.imageUrl}} className='w-[80px] h-[80px] rounded-full' />
      <Text style={{fontFamily:'outfit-bold',fontSize:20}}>{user?.fullName}</Text>
      <Text style={{fontFamily:'outfit',fontSize:16}}>{user?.primaryEmailAddress?.emailAddress}</Text>
    </View>
  )
}

export default UserIntro