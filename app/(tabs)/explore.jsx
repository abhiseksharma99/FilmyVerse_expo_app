import React, { useState } from 'react';
import Categories from '../../components/Categories';
import CategoryViaPost from '../../components/CategoryViaPost';
import { View } from 'react-native';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <View className='flex-1 bg-black mt-[10%]'>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <CategoryViaPost selectedCategory={selectedCategory} />
    </View>
  );
}

export default Explore;
