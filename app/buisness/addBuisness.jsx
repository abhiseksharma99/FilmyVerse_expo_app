import { View, Text, Image, TextInput, ToastAndroid, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from 'react-native-picker-select';
import { db, storage } from '../../configs/FirebaseConfig'
import { query,collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { useUser } from "@clerk/clerk-expo";

const addBuisness = () => {

  const {user} = useUser();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [categoryList,setCategoryList] = useState([]);
  const [name,setName] = useState();
  const [address,setAddress] = useState();
  const [contact,setContact] = useState();
  const [website,setWebsite] = useState();
  const [about,setAbout] = useState();
  const [category,setCategory] = useState();
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add new Buisness",
      headerShown: true,
    });
    GetCategoryList();
  }, []);

  const onImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    setImage(result?.assets[0].uri);
  };


  const GetCategoryList = async() => {
     setCategoryList([]);
     const q = query(collection(db,'Category'));
     const snapShot = await getDocs(q);
     snapShot.forEach((doc) => {
        setCategoryList(prev=>[...prev,{
            label:(doc.data()).name,
            value:(doc.data()).name
        }])
     })
  }

  const onAddNewBuisness = async() => {
    setLoading(true);
    const fileName = Date.now().toString()+'.jpg';
    const resp = await fetch(image);
    const blob = await resp.blob();
    const imageRef = ref(storage,'buisness-app/' + fileName);
    uploadBytes(imageRef,blob).then((snapShot)=>{
      console.log('file uploaded')
    }).then(resp=>{
      getDownloadURL(imageRef).then(async(downloadUrl)=>{
        saveBuisnessDetail(downloadUrl)
      })
    })
    setLoading(false);
  }

  const saveBuisnessDetail = async(imageUrl) => {
    await setDoc(doc(db,'BuisnessList',Date.now().toString()),{
      name:name,
      address:address,
      contact:contact,
      about:about,
      website:website,
      category:category,
      username:user?.fullName,
      userEmail:user?.primaryEmailAddress?.emailAddress,
      userImage:user?.imageUrl,
      imageUrl:imageUrl
    })
    setLoading(false);
    ToastAndroid.show('New Buisness addeed...',ToastAndroid.LONG)
  }


  return (
    <ScrollView className="p-5">
      <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
        Add new Buisness
      </Text>
      <Text style={{ fontFamily: "outfit" }} className="text-gray-400">
        Fill in all details in order to add buisness
      </Text>
      <TouchableOpacity onPress={() => onImagePick()} className="mt-5">
        {!image ? (
          <Image
            source={require("../../assets/images/imagepicker.png")}
            className="w-[100px] h-[100px]"
          />
        ) : (
          <Image
            source={{uri:image}}
            className="w-[100px] h-[100px] rounded-xl"
          />
        )}
      </TouchableOpacity>
      <View>
        <TextInput onChangeText={(v)=>setName(v)} placeholder="name" className='p-3 border border-gray-400 rounded-lg text-base bg-white mt-2' style={{fontFamily:'outfit'}} />
        <TextInput onChangeText={(v)=>setAddress(v)} placeholder="Address" className='p-3 border border-gray-400 rounded-lg text-base bg-white mt-2' style={{fontFamily:'outfit'}} />
        <TextInput onChangeText={(v)=>setContact(v)} placeholder="Contact" className='p-3 border border-gray-400 rounded-lg text-base bg-white mt-2' style={{fontFamily:'outfit'}} />
        <TextInput onChangeText={(v)=>setWebsite(v)} placeholder="website" className='p-3 border border-gray-400 rounded-lg text-base bg-white mt-2' style={{fontFamily:'outfit'}} />
        <TextInput onChangeText={(v)=>setAbout(v)} multiline numberOfLines={5} placeholder="About" className='p-3 border border-gray-400 rounded-lg text-base bg-white mt-2 h-[100px]' style={{fontFamily:'outfit'}} />
        <View className='p-1 mt-2 border border-gray-400 rounded-lg text-base bg-white'>
            <RNPickerSelect
             onValueChange={(value) => setCategory(value)}
             items={categoryList}
            />
        </View>
      </View>
      <TouchableOpacity disabled={loading} onPress={()=>onAddNewBuisness()} className='p-3 bg-[#BF40BF] mt-2 rounded-lg'>
        {
          loading?
          <ActivityIndicator size={'large'} color='white' />
          :
        <Text style={{fontFamily:'outfit'}} className='text-white text-center'>Add New Buisness</Text>
        }
      </TouchableOpacity>
      <View className='h-[50px]'></View>
    </ScrollView>
  );
};

export default addBuisness;
