import { View, Text, TextInput, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { TouchableOpacity } from "react-native";
import { db } from "../../configs/FirebaseConfig";
import { getDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useUser } from "@clerk/clerk-expo";
import { Image } from "react-native";

const Reviews = ({ buisness }) => {
  const [rating, setRating] = useState(4);
  const [userInput,setUserInput] = useState();
  const {user} = useUser();

  const onSubmit = async() => {
    const docRef = doc(db,'BuisnessList',buisness?.id)
    await updateDoc(docRef,{
        reviews:arrayUnion({
            rating:rating,
            comment:userInput,
            userName:user?.fullName,
            userImage:user?.imageUrl,
            userEmail:user?.primaryEmailAddress?.emailAddress
        })
    })
    ToastAndroid.show('Comment added successfully !', ToastAndroid.BOTTOM)
  }

  return (
    <View className="p-5 bg-white">
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>Reviews</Text>
      <View>
        <Rating
          showRating={false}
          imageSize={30}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          numberOfLines={4}
          onChangeText={(value)=>setUserInput(value)}
          placeholder="write your comment..."
          className="border p-2 rounded-lg border-gray-500"
          style={{ textAlignVertical: "top" }}
        />
        <TouchableOpacity 
        disabled={!userInput}
        onPress={()=>onSubmit()}
         className='p-2 bg-[#BF40BF] rounded-lg mt-2'> 
            <Text style={{fontFamily:'outfit'}} className='text-white text-center text-base'>Submit</Text>
        </TouchableOpacity>
      </View>
      <View>
        {
            buisness?.reviews?.map((item,index)=>(
                <View className='flex flex-row gap-2 itemc-center p-2 border border-gray-500 rounded-lg mt-2'>
                <Image source={{uri:item.userImage}} className='w-[50px] h-[50px] rounded-full' />
                <View className=''>
                <Text style={{fontFamily:'outfit-medium'}}>{item.userName}</Text>
                <Rating imageSize={20} ratingCount={item.rating} style={{alignItems:'flex-start'}} />
                <Text style={{fontFamily:'outfit-medium'}}>{item.comment}</Text>
                </View>
                </View>
            ))
        }
      </View>
    </View>
  );
};

export default Reviews;
