import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";

const EditProfile = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!title) newErrors.title = "*Title is required*";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      setModalVisible(true);

      setTimeout(() => {
        setModalVisible(false);
        router.push("/Profile");
      }, 2000);

      setTitle("");
      setSelectedImage(null);
    }
  };

  return (
    <View className="flex-1 bg-black mt-[10%]">
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-1 left-3 z-10"
      >
        <Ionicons name="arrow-back-circle" size={40} color="red" />
      </TouchableOpacity>
      <Text className="text-red-600 text-center font-bold text-xl p-3">
        Edit Profile
      </Text>
      <View className="flex items-center py-4 mt-[5%]">
        <TouchableOpacity onPress={pickImage}>
        <Image
          source={{
            uri: selectedImage?selectedImage:"https://i.pinimg.com/474x/b2/44/41/b244412a5bfc97b049b0ec39f587ac17.jpg",
          }}
          className="w-24 h-24 rounded-full"
        />
        </TouchableOpacity>
      </View>
      <View className='p-3 mx-[7%]'>
       <TextInput value={title}
            onChangeText={(text) => setTitle(text)} placeholder="username" className='bg-white p-2 rounded-lg border border-gray-400 mt-[3%]' />
            {errors.title && (
            <Text className="text-red-500 text-xs mb-2">{errors.title}</Text>
          )}
       <TouchableOpacity onPress={handleSubmit} className='bg-red-600 w-[25%] p-1.5 rounded-lg m-auto mt-[8%]'>
        <Text className='text-center text-white font-bold text-base'>Save</Text>
       </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View className="bg-white p-5 rounded-lg items-center">
          <Ionicons name="checkmark-circle" size={70} color="green" />
          <Text className="text-xl font-bold text-gray-800 mt-4">
            Saved Successfully!
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default EditProfile;