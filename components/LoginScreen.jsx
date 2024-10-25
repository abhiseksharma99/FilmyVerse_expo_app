import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from '../constants/Colors';
import { TouchableOpacity } from "react-native";
import {useWarmUpBrowser} from '../hooks/useWarmUpBrowser';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    useWarmUpBrowser();

    const {startOAuthFlow} = useOAuth({ strategy: 'oauth_google'});

    const onPress = React.useCallback(async() => {
        try{
            const { createdSessionId, SignIn, SignUp, setActive } =
            await startOAuthFlow();

            if(createdSessionId){
                setActive({session: createdSessionId});
            } else {

            }
        } catch (err) {
            console.log('OAuth error', err);
        }
    }, []);

  return (
    <View>
      <View className='flex items-center mt-24'>
        <Image
          source={require("../assets/images/pageone.jpg")}
          style={{
            width:220,
            height:450,
            borderRadius:20,
            borderWidth:6,
            borderColor:'black'
          }}
        />
      </View>
      <View className='bg-white p-5 mt-[-30px]'>
         <Text className='text-2xl text-center' style={{fontFamily:'outfit-bold'}}>Your Ultimate
         <Text style={{color:Colors.PRIMARY}}> Community buisness directory </Text>
         App
         </Text>
         <Text className='text-md text-center my-3 text-gray-400' style={{fontFamily:'outfit'}}>
            Find your favourite buisness near you and post your own buisness to your community
         </Text>
         <TouchableOpacity onPress={onPress} className='bg-[#BF40BF] p-3 rounded-3xl mt-5'>
            <Text className='text-center text-white' style={{fontFamily:'outfit'}}>Let's get started</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
