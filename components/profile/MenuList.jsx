import { View, Text, Share } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

const MenuList = () => {

  const {signOut} = useAuth();

    const menuList = [
        {
            id: 1,
            name:'Add Buisness',
            icon: require('../../assets/images/add.png'),
            path: '/buisness/addBuisness'
        },
        {
            id: 2,
            name:'My Buisness',
            icon: require('../../assets/images/buisness.png'),
            path: '/buisness/myBuisness'
        },
        {
            id: 3,
            name:'Share App',
            icon: require('../../assets/images/share.png'),
            path: 'share'
        },
        {
            id: 4,
            name:'Logout',
            icon: require('../../assets/images/logout.png'),
            path: 'logout'
        },
    ]

    const router = useRouter();

    const onMenuClick = (item) => {
      if(item.path=='logout'){
        signOut();
        return ;
      }
      if(item.path=='share'){
        Share.share(
          {
            message:'Download this directory app, Download URL: https://www.armani.com'
          }
        )
        return ;
      }
      router.push(item.path)
    }

  return (
    <View className='mt-10'>
      <FlatList
       data={menuList}
       numColumns={2}
       renderItem={({item,index})=>(
        <TouchableOpacity onPress={()=>onMenuClick(item)}
         className='flex flex-row items-center gap-3 flex-1 pb-2 rounded-lg border-2 border-[#BF40BF] m-2 bg-white'>
            <Image source={item.icon}
             className='w-[30px] h-[30px]'
             />
             <Text style={{fontFamily:'outfit-medium',fontSize:15,flex:1}}>{item.name}</Text>
        </TouchableOpacity>
       )}
      />
      <Text style={{fontFamily:'outfit'}} className='text-center mt-10 text-gray-400'>App inspired from TubeGuruji @2024</Text>
    </View>
  )
}

export default MenuList