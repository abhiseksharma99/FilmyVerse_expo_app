import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MySuggestedSeries from '../data/MySuggestedSeries'
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'react-native';

const LowerProfile = () => {

    const router = useRouter();

  return (
    <View>
    <Text className='text-xl font-bold text-center mt-[5%] text-red-600 py-4'>My Suggested Series</Text>
    <ScrollView>
    <View className='p-2 flex flex-row flex-wrap justify-center'>
      {MySuggestedSeries.map((item) => (
        <TouchableOpacity key={item.id} className='m-2'>
          <Image
            source={{ uri: item.url }}
            className='w-36 h-52 rounded-xl'
          />
        </TouchableOpacity>
      ))}
    </View>
    <TouchableOpacity onPress={() => router.push('/Home')} className='my-2 flex items-center'>
      <Text className='bg-red-700 w-[40%] text-base text-center p-2 rounded-3xl text-white font-bold'>
        Load More...
      </Text>
    </TouchableOpacity>
    <View className='p-40'></View>
    </ScrollView>
  </View>
  )
}

export default LowerProfile