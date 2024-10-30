import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <View className="bg-black flex-1 mt-[10%]">
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-3 left-3 z-10"
      >
        <Ionicons name="arrow-back-circle" size={40} color="red" />
      </TouchableOpacity>
      <Text className="text-red-600 text-center text-2xl py-4 font-bold">
        Settings
      </Text>
      <View className="p-4">
        <TouchableOpacity
          onPress={() => router.push("/settingsList/Newpost")}
          className="flex flex-row gap-2 items-center w-[70%] my-3"
        >
          <FontAwesome6 name="add" size={20} color="red" />
          <Text className="text-red-600 text-base font-bold">
            Add New Suggestion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settingsList/HowToUse")} className="flex flex-row gap-2 items-center w-[70%] my-3">
          <AntDesign name="questioncircleo" size={20} color="red" />
          <Text className="text-red-600 text-base font-bold">How to use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settingsList/PrivacyPolicy")} className="flex flex-row gap-2 items-center w-[70%] my-3">
          <MaterialIcons name="privacy-tip" size={20} color="red" />
          <Text className="text-red-600 text-base font-bold">
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settingsList/TermsOfUse")} className="flex flex-row gap-2 items-center w-[70%] my-3">
          <Foundation name="clipboard-notes" size={20} color="red" />
          <Text className="text-red-600 text-base font-bold">Terms of Use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settingsList/Help")} className="flex flex-row gap-2 items-center w-[70%] my-3">
          <FontAwesome5 name="hands-helping" size={20} color="red" />
          <Text className="text-red-600 text-base font-bold">Help ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("")}
          className="flex flex-row gap-2 items-center w-[70%] my-3"
        >
          <SimpleLineIcons name="logout" size={20} color="red" />
          <Text className="text-red-600 text-base font-bold">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
