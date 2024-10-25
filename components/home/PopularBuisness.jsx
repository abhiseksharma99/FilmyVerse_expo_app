import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfig'
import { query,collection, getDocs, limit } from 'firebase/firestore'
import PopularBuisnessCard from './PopularBuisnessCard'

const PopularBuisness = () => {

    const [buisnessList,setBuisnessList] = useState([]);

    const GetBuisnessList = async() => {
        setBuisnessList([]);
        const q = query(collection(db,'BuisnessList'),limit(10));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
           setBuisnessList(prev=>[...prev,{id:doc.id, ...doc.data()}])
        })
    }

    useEffect(()=>{
        GetBuisnessList();
    },[])

  return (
    <View>
       <View className='flex flex-row items-center justify-between px-3 mt-5 mb-2'>
        <Text style={{fontFamily:'outfit-bold',fontSize:16}}>Popular Buisness</Text>
        <Text style={{fontFamily:'outfit-bold',color:'#BF40BF'}}>view all</Text>
      </View>
      <FlatList 
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       data={buisnessList}
       renderItem={({item,index}) => (
        <PopularBuisnessCard key={index} buisness={item} />
       )}
       />
    </View>
  )
}

export default PopularBuisness