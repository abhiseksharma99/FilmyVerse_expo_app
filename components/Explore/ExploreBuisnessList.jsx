import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import BuisnessListCard from './BuisnessListCard'

const ExploreBuisnessList = ({buisnessList}) => {
  return (
    <ScrollView>
      <FlatList
       data={buisnessList}
       showsVerticalScrollIndicator={false}
       renderItem={({item,index})=>(
        <BuisnessListCard key={index} buisness={item} />
       )}
       />
       <View className='h-[180px]'></View>
    </ScrollView>
  )
}

export default ExploreBuisnessList
