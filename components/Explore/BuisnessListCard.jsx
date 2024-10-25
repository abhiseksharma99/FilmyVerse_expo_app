import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const BuisnessListCard = ({buisness}) => {

    const router = useRouter()

  return (
    <TouchableOpacity onPress={()=>router.push('/buisnessdetail/'+buisness?.id)}
     className='bg-white rounded-bl-[15px] rounded-br-[15px] m-3'>
      <Image className='w-[100%] h-[150px] rounded-tl-[15px] rounded-tr-[15px]'
      source={{uri:buisness?.imageUrl}} />
      <View className='p-2'>
        <Text style={{fontFamily:'outfit-bold',fontSize:20}}>{buisness?.name}</Text>
        <Text style={{fontFamily:'outfit'}} className='text-gray-500'>{buisness?.address}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BuisnessListCard