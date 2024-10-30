import React from 'react';
import { Tabs } from "expo-router";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View, Image } from 'react-native';

const _layout = () => {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#800000',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: { 
          marginHorizontal: 20,
          borderRadius: 40,
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          border: 'none'
        },
        tabBarBackground: () => <View style={{ backgroundColor: 'red', flex: 1, borderRadius:40 }} />,
      }}
    >
      <Tabs.Screen 
        name="Home"  
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          contentStyle: { backgroundColor: 'black' },
        }} 
      />
      <Tabs.Screen 
        name="Explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={24} color={color} />
          ),
          contentStyle: { backgroundColor: 'black' }, 
        }}
      />
      <Tabs.Screen 
        name="WatchList"
        options={{
          tabBarLabel: "WatchList",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" size={24} color={color} />
          ),
          contentStyle: { backgroundColor: 'black' }, 
        }}
      />
      <Tabs.Screen 
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <View className={`items-center justify-center rounded-full ${focused ? 'border border-[#800000] p-0.5' : ''}`}>
              <Image
                source={{ uri: 'https://i.pinimg.com/474x/b2/44/41/b244412a5bfc97b049b0ec39f587ac17.jpg' }}
                className="w-7 h-7 rounded-full"
              />
            </View>
          ),
          contentStyle: { backgroundColor: 'black' }, 
        }}
      />
    </Tabs> 
  );
}

export default _layout;

