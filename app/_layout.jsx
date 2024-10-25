import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Text } from "react-native";
import LoginScreen from "../components/LoginScreen";
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key) {
    try{
    return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value){
    try{
      return SecureStore.setItemAsync(key,value);
    } catch(err) {
      return;
    }
  },
};

const _layout = () => {
  useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      </SignedIn>
      <SignedOut>
       <LoginScreen/>
      </SignedOut>
    </ClerkProvider>
  );
};

export default _layout;
