import { View, Text, FlatList, Image, Linking, Share } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'


const ActionButton = ({buisness}) => {

    const actionButtonMenu = [
        {
            id: 1,
            name: 'call',
            icon: require('../../assets/images/phone.png'),
            url: 'tel:' +  buisness?.contact
        },
        {
            id: 2,
            name: 'loaction',
            icon: require('../../assets/images/location.png'),
            url: 'https://www.google.com/maps/search/?api=1&query=' + buisness?.address
        },
        {
            id: 3,
            name: 'web',
            icon: require('../../assets/images/website.png'),
            url: buisness?.website
        },
        {
            id: 4,
            name: 'share',
            icon: require('../../assets/images/share.png'),
            url: buisness?.website
        },
    ]

    const onPressHandle = (item) => {
        if(item.name=='share'){
            Share.share({
                message:buisness?.name+'\n Address:' + buisness.address + '\n Find more details on directory app !'
            })
            return;
        }
        Linking.openURL(item.url);
    }

  return (
    <View className='bg-white p-5'>
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{justifyContent:'space-between'}}
        renderItem={({item,index}) => (
            <TouchableOpacity key={index} onPress={()=>onPressHandle(item)}>
                <Image source={item?.icon} className='w-[50px] h-[50px]' />
                <Text style={{fontFamily:'outfit-medium',textAlign:'center',marginTop:3}}>{item.name}</Text>
            </TouchableOpacity>
        )}
       />
    </View>
  )
}

export default ActionButton