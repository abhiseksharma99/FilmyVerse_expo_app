import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { db } from '../../configs/FirebaseConfig'
import { query,collection, getDocs, where } from 'firebase/firestore'
import BuisnessListCard from '../../components/BuisnessList/BuisnessListCard'

const BuisnessListByCategory = () => {

    const navigation = useNavigation();
    const {category} = useLocalSearchParams();
    const [buisnessList,setBuisnessList] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTitle: category
      })
      getBuisnessList();
    },[]);


    const getBuisnessList = async() => {
      setLoading(true);
      setBuisnessList([]);
      const q = query(collection(db, 'BuisnessList'), where('category', '==', category));
      const querySnapshot = await getDocs(q);
      const newData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBuisnessList(newData);
      setLoading(false);
    }
    

  return (
    <View>
        {
            buisnessList?.length>0&&loading==false?
      <FlatList
       data={buisnessList} 
       onRefresh={getBuisnessList}
       refreshing={loading}
       renderItem={({item,index})=>(
        <BuisnessListCard buisness={item} key={index} />
       )}
      />
      :
      loading?
      <ActivityIndicator style={{marginTop:'60%'}} size={'large'} color='#BF40BF' />
       :
      <Text className='text-center mt-[50%] text-gray-500 text-xl' style={{fontFamily:'outfit-bold'}}>
        No Buisness Found !
      </Text>
    }
    </View>
  )
}

export default BuisnessListByCategory

