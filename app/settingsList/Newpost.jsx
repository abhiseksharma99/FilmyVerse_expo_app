import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";



const Newpost = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    if (!description) newErrors.description = "*Description is required*";
    if (!selectedImage) newErrors.image = "*Image is required*";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      setModalVisible(true);

      setTimeout(() => {
        setModalVisible(false);
        router.push("/Home");
      }, 2000);

      setTitle("");
      setDescription("");
      setSelectedImage(null);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      className="bg-black"
    >
      <View className="flex-1 mt-[10%]">
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-5 left-3 z-10"
        >
          <Ionicons name="arrow-back-circle" size={40} color="red" />
        </TouchableOpacity>
        <Text className="text-red-600 text-center py-6 text-2xl font-bold">
          Add New Suggestion
        </Text>
        <View className="flex items-center mt-[10%] mb-[10%]">
          <TouchableOpacity onPress={pickImage}>
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={{ width: 300, height: 300, borderRadius: 10 }}
              />
            ) : (
              <Ionicons name="add-circle-sharp" size={70} color="red" />
            )}
          </TouchableOpacity>
          {errors.image && (
            <Text className="text-red-500 text-xs mt-2">{errors.image}</Text>
          )}
        </View>
        <View className="p-3 mx-[5%]">
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={(text) => setTitle(text)}
            className="bg-white p-2 rounded-lg my-2 border border-gray-400"
          />
          {errors.title && (
            <Text className="text-red-500 text-xs mb-2">{errors.title}</Text>
          )}
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            numberOfLines={4}
            className="bg-white p-2 rounded-lg my-2 border border-gray-400"
          />
          {errors.description && (
            <Text className="text-red-500 text-xs mb-2">
              {errors.description}
            </Text>
          )}
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-red-600 w-[30%] m-auto rounded-lg my-8"
          >
            <Text className="text-center font-bold text-white p-2">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View className="bg-white p-5 rounded-lg items-center">
          <Ionicons name="checkmark-circle" size={70} color="green" />
          <Text className="text-xl font-bold text-gray-800 mt-4">
            Post Added Successfully!
          </Text>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Newpost;
