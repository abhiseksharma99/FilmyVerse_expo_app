import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const index = () => {

  const router = useRouter();

  return (
    <View className='bg-black flex-1'>
      <Image source={require('../assets/images/moviesCollage.jpg')} className='w-[100%] h-[100%] bg-cover' />
      <View className='absolute w-[100%] h-[100%]' style={{backgroundColor:'rgba(16,16,16,0.9)'}} >
        <View className='absolute top-[50%] w-[100%]'>
        <Text className=' text-center text-white w-[100%] text-4xl font-bold'>Welcome to,</Text>
        <Text className=' text-center text-white w-[100%] text-4xl font-bold py-3'>FILMY<Text className='text-red-600 font-bold'>VERSE</Text></Text>
        </View>
        <TouchableOpacity onPress={()=>router.push('/Home')} className='absolute bottom-[5%] w-[100%] flex flex-row justify-center'>
       <Text className='text-xl text-white w-[50%] text-center p-2 bg-red-700 rounded-full'>Let's Explore</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default index
