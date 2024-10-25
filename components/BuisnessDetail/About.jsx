import { View, Text } from 'react-native'
import React from 'react'

const About = ({buisness}) => {
  return (
    <View className='bg-white p-5'>
      <Text style={{fontFamily:'outfit-bold',fontSize:20}}>About</Text>
      <Text style={{fontFamily:'outfit',lineHeight:20}}>{buisness?.about}</Text>
    </View>
  )
}

export default About