import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/home/Header'
import Slider from '../../components/home/Slider'
import Category from '../../components/home/Category'
import PopularBuisness from '../../components/home/PopularBuisness'

const home = () => {
  return (
    <ScrollView>
      <Header/>
      <Slider/>
      <Category/>
      <PopularBuisness/>
      <View className='h-[50px]'></View>
    </ScrollView>
  )
}

export default home