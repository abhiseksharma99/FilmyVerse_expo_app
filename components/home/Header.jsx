import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';


const Header = () => {

    const {user} = useUser();

  return (
    <View className='p-5 pt-10 bg-[#BF40BF]' style={{borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
      <View className='flex flex-row items-center gap-2'>
        <Image source={{uri:user?.imageUrl}} className='w-10 h-10 rounded-full' />
        <View>
            <Text className='text-white'>Welcome,</Text>
            <Text className='text-xl text-white' style={{fontFamily:'outfit-medium'}}>{user?.fullName}</Text>
        </View>
      </View>
      <View className='flex flex-row items-center gap-2 bg-white pb-2 mx-1 mt-3 rounded-lg'>
        <Ionicons name='search' size={24} color='#BF40BF' />
        <TextInput placeholder='search ... '  style={{fontFamily:'outfit',fontSize:16}} />
      </View>
    </View>
  )
}

export default Header