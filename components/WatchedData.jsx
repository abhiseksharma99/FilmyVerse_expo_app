import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AlreadyWatched from '../data/AlreadyWatched'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const WatchedData = () => {

    const router = useRouter();

  return (
    <View>
      <Text className='text-white bg-red-600 p-3 text-xl font-bold text-center'>Already Watched</Text>
      <ScrollView>
      <View className='p-2 flex flex-row flex-wrap justify-center'>
        {AlreadyWatched.map((item) => (
          <TouchableOpacity key={item.id} className='m-2 relative'>
            <Image
              source={{ uri: item.url }}
              className='w-36 h-52 rounded-xl'
            />
            <TouchableOpacity className='absolute right-2 top-1'>
                <AntDesign name="heart" size={24} color="red" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => router.push('/Explore')} className='my-2 flex items-center'>
        <Text className='bg-red-700 w-[40%] text-base text-center p-2 rounded-3xl text-white font-bold'>
          Load More...
        </Text>
      </TouchableOpacity>
      <View className='p-14'></View>
      </ScrollView>
    </View>
  )
}

export default WatchedData