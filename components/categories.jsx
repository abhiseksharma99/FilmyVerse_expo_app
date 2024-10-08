import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import {data} from '../constants/data'
import {wp} from '../helpers/common'
import Animated, { FadeInRight } from 'react-native-reanimated'

const Categories = ({activeCategory,handleChangeCategory}) => {

const CategoryItem = ({title,index,isActive,handleChangeCategory}) => {
 return (
  <Animated.View entering={FadeInRight.delay(index*200).duration(1000).springify().damping(14)}>
    <Pressable
    onPress={()=>handleChangeCategory(isActive?null:title)}
     className={isActive?'bg-black p-3 px-3 border border-gray-300 rounded-2xl':'bg-white p-3 px-3 border border-gray-300 rounded-2xl'}>
    <Text className={isActive?'font-semibold text-md text-white':'font-semibold text-md text-black'}>{title}</Text>
    </Pressable>
  </Animated.View>
 )
}

  return (
    <FlatList
    horizontal
    contentContainerStyle={styles.flatlistContainer}
    showsHorizontalScrollIndicator={false}
    data={data.categories}
    keyExtractor={item=>item}
    renderItem={({item,index})=>(
      <CategoryItem
       isActive={activeCategory===item}
       handleChangeCategory={handleChangeCategory}
       title={item}
       index={index}
       />
    )}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  flatlistContainer:{
    paddingHorizontal: wp(4),
    gap: 8
  }
})

