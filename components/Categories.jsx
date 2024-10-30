import { View, Text, ScrollView } from "react-native";
import React from "react";
import categories from "../data/categories";
import { TouchableOpacity } from "react-native";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <View className='p-4'>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className='flex flex-row gap-2'>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              className={`px-4 py-1.5 rounded-lg ${selectedCategory === item ? 'bg-red-800' : 'bg-red-600'}`}
              onPress={() => setSelectedCategory(item)}
            >
              <Text className="text-white text-base font-bold">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

