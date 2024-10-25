import { View, Text, ToastAndroid } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { db } from "../../configs/FirebaseConfig";
import {
  getDoc,
  doc,
  query,
  collection,
  getDocs,
  where,
  deleteDoc,
} from "firebase/firestore";
import { useUser } from "@clerk/clerk-expo";

const Intro = ({ buisness }) => {
  const router = useRouter();
  const { user } = useUser();

  const OnDelete = () => {
    Alert.alert("Delete", "delete this post", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => deleteBuisness(),
      },
    ]);
  };

  const deleteBuisness = async () => {
    await deleteDoc(doc(db, "BuisnessList", buisness?.id));
    router.back();
    ToastAndroid.show("Post deleted!", ToastAndroid.LONG);
  };

  return (
    <View>
      <View className="absolute z-10 flex flex-row justify-between w-[100%] p-5">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={40} color="white" />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={40} color="white" />
      </View>
      <Image
        source={{ uri: buisness?.imageUrl }}
        className="w-[100%] h-[340px]"
      />
      <View className="flex flex-row justify-between p-5 mt-[-20px] bg-white rounded-tl-[25px] rounded-tr-[25px]">
        <View className="p-5 mt-[-20px] bg-white rounded-tl-[25px] rounded-tr-[25px]">
          <Text style={{ fontFamily: "outfit-bold" }} className="text-2xl">
            {buisness.name}
          </Text>
          <Text style={{ fontFamily: "outfit" }} className="text-base">
            {buisness.address}
          </Text>
        </View>
        {user?.primaryEmailAddress?.emailAddress == buisness?.userEmail && (
          <TouchableOpacity onPress={() => OnDelete()}>
            <Ionicons name="trash" size={24} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Intro;
