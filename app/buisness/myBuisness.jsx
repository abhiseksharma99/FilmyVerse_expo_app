import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { db } from "../../configs/FirebaseConfig"
import { query, collection, getDocs, where } from "firebase/firestore"
import BuisnessListCard from '../../components/Explore/BuisnessListCard'
import { useNavigation } from 'expo-router'

const myBuisness = () => {

    const {user} = useUser();
    const [buisnessList,setBuisnessList] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigation = useNavigation();

    const GetUserBuisness = async() => {
        setLoading(true);
        setBuisnessList([]);
        const q = query(collection(db,'BuisnessList'),where('userEmail','==',user?.primaryEmailAddress?.emailAddress));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
            setBuisnessList(prev=>[...prev,{id:doc.id, ...doc.data()}])
        })
        setLoading(false);
    }    

    
    useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTitle: 'My Business',
          headerStyle: {
            backgroundColor: '#BF40BF',
          },
          headerTintColor: 'white',
        });
        user && GetUserBuisness();
      }, [user]);


  return (
    <View className='p-5'>
      <Text style={{fontFamily:'outfit-bold',fontSize:30}}>myBuisness</Text>
      <FlatList
      onRefresh={GetUserBuisness}
      refreshing={loading}
       data={buisnessList}
       renderItem={({item,index}) => (
       <BuisnessListCard buisness={item} key={index} />
       )}
      />
    </View>
  )
}

export default myBuisness