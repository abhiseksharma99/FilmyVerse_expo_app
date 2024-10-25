import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfig'
import { query,collection, getDocs } from 'firebase/firestore'
import CategoryItem from './CategoryItem'
import { useRouter } from 'expo-router'

const Category = ({explore,onCategorySelect}) => {

  const router = useRouter();
  const [categoryList,setCategoryList] = useState([]);

    const GetCategoryList = async() => {
        setCategoryList([]);
        const q = query(collection(db,'Category'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setCategoryList(prev=>[...prev,doc.data()])
        })
    }

    useEffect(()=>{
       GetCategoryList();
    },[])

    const onCategoryPressHandler = (item) => {
      if(!explore){
        router.push('/buisnesslist/'+item.name)
      } else {
        onCategorySelect(item.name)
      }
    }

  return (
    <View>
      {
        !explore &&
      <View className='flex flex-row items-center justify-between p-5 mt-2'>
        <Text style={{fontFamily:'outfit-bold',fontSize:16}}>Category</Text>
        <Text style={{fontFamily:'outfit-bold',color:'#BF40BF'}}>view all</Text>
      </View>
      }
      <FlatList 
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       className='ml-5'
       data={categoryList}
       renderItem={({item,index}) => (
        <CategoryItem category={item} key={index} 
        onCategoryPress={(category)=>onCategoryPressHandler(item)}
         />
       )}
       />
    </View>
  )
}

export default Category