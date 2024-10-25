import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { db } from "../../configs/FirebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import Intro from "../../components/BuisnessDetail/Intro";
import ActionButton from "../../components/BuisnessDetail/ActionButton";
import About from "../../components/BuisnessDetail/About";
import Reviews from "../../components/BuisnessDetail/Reviews";

const BuisnessDetail = () => {
  const { buisnessid } = useLocalSearchParams();
  const [buisness, setBuisness] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBuisnessDetailById = async () => {
    setLoading(true);
    const docRef = doc(db, "BuisnessList", buisnessid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBuisness({id:docSnap.id, ...docSnap.data()});
      setLoading(false);
    } else {
      console.log("No data found !");
      setLoading(false);
    }
  };

  useEffect(() => {
    getBuisnessDetailById();
  }, []);

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator
          size={"larger"}
          color="#BF40BF"
          className="mt-[70%]"
        />
      ) : (
        <View>
          <Intro buisness={buisness} />
          <ActionButton buisness={buisness} />
          <About buisness={buisness} />
          <Reviews buisness={buisness} />
        </View>
      )}
    </ScrollView>
  );
};

export default BuisnessDetail;

