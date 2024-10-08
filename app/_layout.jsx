import React from 'react'
import { Stack } from 'expo-router'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'

const _layout = () => {

 useFonts({
  'DancingScript-bold': require('../assets/fonts/DancingScript-Bold.ttf')
 })

  return (
    <GestureHandlerRootView style={{flex: 1}} >
    <BottomSheetModalProvider>
    <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="home/index" options={{ headerShown: false }} />
    <Stack.Screen name="home/image" 
    options={{
       headerShown: false,
       presentation: 'transparentModal',
       animation:'fade'
       }}
     />
    </Stack>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default _layout
