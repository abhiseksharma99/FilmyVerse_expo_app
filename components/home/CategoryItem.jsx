import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const CategoryItem = ({ category,onCategoryPress }) => {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
      <View className='p-3 bg-violet-100 rounded-full mr-3'>
        <Image source={{ uri: category.icon }} className="w-[40px] h-[40px]" />
      </View>
      <Text className='text-xs text-center mt-1' style={{fontFamily:'outfit-medium'}}>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
