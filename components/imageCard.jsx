import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { getImageSize } from '../helpers/common'

const ImageCard = ({item,index,router}) => {

    const getImageHeight = () => {
      let {imageHeight: height, imageWidth: width} = item;
      return {height: getImageSize(height,width)};
    }

  return (
    <Pressable onPress={()=>router.push({pathname: 'home/image', params: {...item}})} className='rounded-2xl m-1 bg-gray-400 overflow-hidden'>
        <Image
         style={[styles.image, getImageHeight()]}
         source={item?.webformatURL}
         transition={100}
         />
    </Pressable>
  )
}

export default ImageCard

const styles = StyleSheet.create({
  image:{
    height: 300,
    width: '100%'
  }
})
