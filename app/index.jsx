import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {wp,hp} from '../helpers/common'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { useRouter } from 'expo-router'

const index = () => {

  const router = useRouter();

  return (
    <View className='flex-1'>
      <StatusBar style='light' />
      <Image
      className='w-[100%] h-[100%] absolute'
       source={require('../assets/images/wall1.jpg')} 
       resizeMode='cover'
       />
       <Animated.View entering={FadeInDown.duration(600)} className='flex-1'>
        <LinearGradient
        style={{width:wp(100),height:hp(65)}}
        className='bottom-0 absolute'
        colors={['rgba(255,255,255,0)','rgba(255,255,255,0.5)','white','white']}
        start={{x:0.5 , y:0}}
        end={{x:0.5, y: 0.8}}
         />
         <View className='flex-1 items-center justify-end gap-4'>
          <Animated.Text entering={FadeInDown.duration(400).springify()} className='text-6xl font-bold'>Pixels</Animated.Text>
          <Animated.Text entering={FadeInDown.duration(500).springify()} className='tracking-widest mb-2 font-medium'>Every pixels tells a story</Animated.Text>
          <Animated.View entering={FadeInDown.duration(600).springify()} className='bg-black mb-12 px-16 py-3 rounded-lg'>
            <Pressable onPress={()=>router.push('home')}>
              <Text className='text-white font-semibold tracking-widest text-xl'>Start Explore</Text>
            </Pressable>
          </Animated.View>
         </View>
       </Animated.View>
    </View>
  )
}

export default index


