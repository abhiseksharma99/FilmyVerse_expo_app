import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const PopularBuisnessCard = ({buisness}) => {

  const router = useRouter();

  return (
    <TouchableOpacity onPress={()=>router.push('/buisnessdetail/'+buisness?.id)}
     className='ml-5 p-2 bg-white rounded-lg'>
      <Image source={{uri:buisness?.imageUrl}} className='w-[200px] h-[130px] rounded-lg' />
      <View className='mt-1'>
        <Text style={{fontFamily:'outfit-bold',fontSize:17}}>{buisness.name}</Text>
        <Text style={{fontFamily:'outfit-bold'}} className='text-gray-400 text-xs'>{buisness.address}</Text>
        <View className='flex flex-row justify-between'>
        <View className='flex flex-row gap-2 items-center'>
            <Image source={require('../../assets/images/star.png')} className='w-[15px] h-[15px]' />
            <Text style={{fontFamily:'outfit-bold'}}>4.5</Text>
        </View>
        <Text style={{fontFamily:'outfit'}} className='bg-[#BF40BF] text-white p-[1px] rounded-lg'>{buisness.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PopularBuisnessCard