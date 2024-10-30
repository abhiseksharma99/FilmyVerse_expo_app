import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'

const SearchBar = () => {

    const [search,setSearch] = useState('');

  return (
    <View>
    <Text className='text-white text-center font-extrabold text-2xl pt-1'>FILMY<Text className='text-red-600'>VERSE</Text></Text>
    <View className='flex flex-row items-center justify-around p-2 mt-2'>
    <View className='flex flex-row items-center w-[80%] p-1 bg-white rounded-xl border-2 border-red-600'>
    <TextInput 
    value={search}
    onChangeText={setSearch}
    placeholder='search movies/series' 
    className='w-[90%] p-1' />
    { 
      search &&
      <Pressable onPress={()=>setSearch('')}>
        <AntDesign name="closecircle" size={20} color="red"/>
      </Pressable>
    }
    </View>
    <Feather name="search" size={30} color="red" />
   </View>
   </View>
  )
}

export default SearchBar