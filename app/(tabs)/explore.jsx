import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import Category from '../../components/home/Category'
import { db } from '../../configs/FirebaseConfig'
import { query,collection, getDocs, where } from 'firebase/firestore'
import ExploreBuisnessList from '../../components/Explore/ExploreBuisnessList'


const explore = ({explore=false}) => {

  const [buisnessList,setBuisnessList] = useState([]);

  const GetBuisnessByCategory = async(category) => {
  setBuisnessList([]);
   const q = query(collection(db,'BuisnessList'),where('category','==',category))
   const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
    setBuisnessList(prev=>[...prev,{id:doc.id, ...doc.data()}])
   })
  }

  return (
    <View className='p-4'>
      <Text style={{fontFamily:'outfit-bold',fontSize:30}}>Explore more</Text>
      <View className='flex flex-row items-center gap-2 bg-white pb-2 mx-1 mt-3 rounded-lg border-2 border-[#BF40BF]'>
        <Ionicons name='search' size={24} color='#BF40BF' />
        <TextInput placeholder='search ... '  style={{fontFamily:'outfit',fontSize:16}} />
      </View>
      <Category explore={true} onCategorySelect={(Category)=>GetBuisnessByCategory(Category)} />
        <ExploreBuisnessList buisnessList={buisnessList} />
    </View>
  )
}

export default explore