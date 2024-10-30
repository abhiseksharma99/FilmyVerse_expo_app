import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const UpperProfile = () => {

  const router = useRouter();

  return (
    <View className='flex items-center p-2 mt-[4%]'>
      <Image source={{uri:'https://i.pinimg.com/474x/b2/44/41/b244412a5bfc97b049b0ec39f587ac17.jpg'}} className='w-20 h-20 rounded-full m-auto' />
      <TouchableOpacity className='absolute right-4 top-2' onPress={()=>router.push('settingsList')}>
      <AntDesign name="bars" size={30} color="red" />
      </TouchableOpacity>
      <Text className='text-red-600 font-bold py-2'>Aman</Text>
      <TouchableOpacity onPress={()=>router.push('/settingsList/EditProfile')} className='bg-red-600 mt-[1%] px-3 py-1 rounded-xl'>
      <Text className='text-white font-bold text-base'>Edit profle</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UpperProfile