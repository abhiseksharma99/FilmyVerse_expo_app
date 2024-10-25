import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const BuisnessListCard = ({buisness}) => {

  const router = useRouter();

  return (
    <TouchableOpacity onPress={()=>router.push('/buisnessdetail/'+buisness.id)}
     className='bg-white p-3 m-3 my-8 rounded-lg flex flex-row gap-3'>
      <Image source={{uri:buisness.imageUrl}} className='w-[120px] h-[120px] rounded-lg' />
      <View className='flex-1'>
        <Text style={{fontFamily:'outfit-bold',fontSize:18}}>{buisness.name}</Text>
        <Text style={{fontFamily:'outfit'}} className='text-gray-400'>{buisness.address}</Text>
        <View className='flex flex-row gap-2 items-center'>
            <Image source={require('../../assets/images/star.png')} className='w-[15px] h-[15px]' />
            <Text style={{fontFamily:'outfit-bold'}}>4.5</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default BuisnessListCard