import { View, Text, Button, Platform, ActivityIndicator, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { BlurView } from 'expo-blur';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {wp} from '../../helpers/common'
import { Entypo, Octicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import Toast from 'react-native-toast-message';

const ImageScreen = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [status, setStatus] = useState('loading');
  let uri = item?.webformatURL;
  const fileName = item?.previewURL?.split('/').pop();
  const imageUrl = uri;
  const filePath = `${FileSystem.documentDirectory}${fileName}`

  const getSize = () => {
    const aspectRatio = item?.imageWidth / item?.imageHeight;
    const maxWidth = Platform.OS == 'web'? wp(50) : wp(92);
    let calculatedHeight = maxWidth / aspectRatio ;
    let calculatedWidth = maxWidth;

    if(aspectRatio<1){
      calculatedWidth = calculatedHeight * aspectRatio;
    }
    return {
      width: calculatedWidth,
      height: calculatedHeight,
    };
  };

  const onLoad = () => {
    setStatus('');
  };

  const handleDownloadImage = async() => {
    if(Platform.OS =='web'){
      const anchor = document.createElement('a');
      anchor.href = imageUrl;
      anchor.target = '_blank';
      anchor.download = fileName || 'download';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }else{
      setStatus('downloading');
      let uri = await downLoadFile();
      if(uri) showToast('Image Downloaded')
    }
  }

  const handleShareImage = async() => {
    if(Platform.OS =='web'){
      showToast('Link Copied');
    }else{
      setStatus('sharing');
      let uri = await downLoadFile();
      if(uri){
        await Sharing.shareAsync(uri);
      }
    }
  }

  const downLoadFile = async() => {
     try{
      const {uri} = await FileSystem.downloadAsync(imageUrl, filePath);
      setStatus('');
      console.log('downloaded at:',uri);
      return uri;
     }catch(err){
      console.log('got error: ',err.message);
      setStatus('');
      Alert.alert('Image',err.message);
      return null;
     }
  }


  const showToast = (message) => {
    Toast.show({
      type: 'success',
      text1: message,
      position: 'bottom'
    });
  }


  const toastConfig = {
    success: ({text1, props, ...rest}) => {
      return (
        <View style={{backgroundColor:'rgba(255,255,255,0.15)'}} className='p-3 px-7 rounded-lg justify-center items-center' >
           <Text className='text-white font-semibold text-md'>{text1}</Text>
        </View>
      )
    }
  }


  return (
    <BlurView
      tint="dark"
      intensity={60}
      style={{ backgroundColor: 'rgba(16,16,13,0.9)' }}
      className="flex-1 items-center justify-center px-4"
    >
      <View style={{...getSize()}}>
        <View className='absolute w-[100%] h-[100%] justify-center items-center' >
          {
            status=='loading' && <ActivityIndicator size='large' color='white' />
          }
        </View>
        <Image
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderColor: 'rgba(255,255,255,0.1)',
            ...getSize(),
          }}
          className="rounded-lg border-2"
          transition={100}
          source={uri}
          onLoad={onLoad}
        />
      </View>
      <View className='mt-10 flex-row items-center justify-around w-[90%]'>
        <Animated.View  entering={FadeInDown.springify()}
        className='w-[50px] h-[50px] justify-center items-center rounded-lg' style={{ backgroundColor: 'rgba(255,255,255,0.2)'}}>
          <Pressable onPress={()=>router.back()}>
            <Octicons name='x' size={24} color='white' />
          </Pressable>
        </Animated.View>
        <Animated.View  entering={FadeInDown.springify().delay(100)}
        className='w-[50px] h-[50px] justify-center items-center rounded-lg' style={{ backgroundColor: 'rgba(255,255,255,0.2)'}}>
          {
            status=='downloading'? 
            (
              <View>
                <ActivityIndicator size='small' color='white' />
              </View>
            )
            :
            (
              <Pressable onPress={handleDownloadImage} >
              <Octicons name='download' size={24} color='white' />
              </Pressable>
            )
          }
        </Animated.View>
        <Animated.View  entering={FadeInDown.springify().delay(200)}
         className='w-[50px] h-[50px] justify-center items-center rounded-lg' style={{ backgroundColor: 'rgba(255,255,255,0.2)'}}>
                  {
            status=='sharing'? 
            (
              <View>
                <ActivityIndicator size='small' color='white' />
              </View>
            )
            :
            (
              <Pressable onPress={handleShareImage} >
              <Entypo name='share' size={22} color='white' />
              </Pressable>
            )
          }
        </Animated.View>
      </View>
      <Toast config={toastConfig} visibilityTime={2500} />
    </BlurView>
  );
};

export default ImageScreen;
