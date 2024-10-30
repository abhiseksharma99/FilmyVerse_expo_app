import { View,ScrollView } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import categoryViaPost from '../data/categoryViaPost';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text } from 'react-native';

const CategoryViaPost = ({ selectedCategory }) => {

  const router = useRouter();
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id] 
    }));
  };


  const filteredPosts = selectedCategory === 'All'
    ? categoryViaPost
    : categoryViaPost.filter(item => item.genre === selectedCategory);

  return (
    <ScrollView>
      <View className='p-2 flex flex-row flex-wrap justify-center'>
        {filteredPosts.map((item) => (
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
      {
        selectedCategory === 'All' &&
      <TouchableOpacity onPress={() => router.push('/Home')} className='my-2 flex items-center'>
        <Text className='bg-red-700 w-[40%] text-base text-center p-2 rounded-3xl text-white font-bold'>
          Load More...
        </Text>
      </TouchableOpacity>
     }
      <View className='p-8'></View>
    </ScrollView>
  );
};

export default CategoryViaPost;
