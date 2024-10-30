import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import recommendedImages from '../data/RecommendedImages';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const Recommendations = () => {
  const router = useRouter();
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id] 
    }));
  };

  return (
    <View className='mt-4'>
      <Text className='bg-red-600 text-white p-4 text-xl font-extrabold text-center mx-4 rounded-xl'>
        Top Recommendations
      </Text>
      <View className='p-2 flex flex-row flex-wrap justify-center'>
        {recommendedImages.map((item) => (
          <TouchableOpacity key={item.id} className='m-2 relative'>
            <Image
              source={{ uri: item.url }}
              className='w-36 h-52 rounded-xl'
            />
            <TouchableOpacity onPress={() => handleLike(item.id)} className='absolute right-2 top-1'>
              {likes[item.id] ? (
                <AntDesign name="heart" size={24} color="red" />
              ) : (
                <AntDesign name="hearto" size={24} color="white" />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => router.push('/Explore')} className='my-2 flex items-center'>
        <Text className='bg-red-700 w-[40%] text-base text-center p-2 rounded-3xl text-white font-bold'>
          Load More...
        </Text>
      </TouchableOpacity>
      <View className='p-8'></View>
    </View>
  );
};

export default Recommendations;
