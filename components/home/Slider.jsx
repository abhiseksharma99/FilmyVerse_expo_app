import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfig'
import { query,collection, getDocs } from 'firebase/firestore'

const Slider = () => {

    const [sliderList,setSliderList] = useState([]);

    const GetSliderList = async() => {
        setSliderList([]);
        const q = query(collection(db,'slider'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            setSliderList(prev=>[...prev,doc.data()]);
        })
    }

    useEffect(()=>{
       GetSliderList();
    },[])

  return (
    <View>
      <Text style={{fontFamily:'outfit-bold'}} className='pl-5 pt-5 mb-1 text-xl'>#Special for you</Text>
      <FlatList 
      data={sliderList} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className='pl-5'
      renderItem={({item,index}) => (
      <Image source={{uri:item.imageUrl}} className='w-[300px] h-[150px] rounded-xl mr-3' />
      )}
      />
    </View>
  )
}

export default Slider