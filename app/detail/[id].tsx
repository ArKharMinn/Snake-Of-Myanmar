import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import Ionicons from '@expo/vector-icons/Ionicons';

const detail = () => {
  const { id } = useLocalSearchParams();
  const list = useSelector((state) => state.list);
  const snakeDetail = list.find((item) => item.Id == id);
  const [mmName, setMmName] = useState<any>("");
  const [engName, setEngName] = useState<any>("");
  const [poison, setPoison] = useState<any>("");
  const [danger, setDanger] = useState<any>("");
  const [detail, setDetail] = useState<any>("");
  const [image, setImage] = useState<any>("");

  useEffect(() => {
    setMmName(snakeDetail.MMName);
    setEngName(snakeDetail.EngName)
    setPoison(snakeDetail.IsPoison)
    setDanger(snakeDetail.IsDanger)
    setDetail(snakeDetail.Detail)
    setImage(snakeDetail.img)
  }, []);
  return (
    <View style={tw``}>
        <View style={tw`h-9`}></View>
        <TouchableWithoutFeedback onPress={()=>router.back()}>
        <Ionicons name="arrow-back-circle-sharp" style={tw`bg-black p-3 text-gray-300`} size={24} />
        </TouchableWithoutFeedback>
     <View style={tw`h-full bg-black`}>
     <ScrollView contentContainerStyle={tw`p-3 pb-50`}>
     <View style={tw` gap-3`}>
       <View style={tw`flex items-center justify-center`}>
       <Image source={image} style={tw`w-80 h-80 rounded`}/>
       </View>
        <Text style={tw`text-white text-xl font-bold`}>{mmName}</Text>
        <View style={tw`flex-row items-center gap-3`}>
        <Text style={tw`text-white text-lg`}>{engName}</Text>
        <Text style={tw`text-white text-[13px] ${poison === "Yes"?"bg-red-500":"bg-green-500"} p-1 rounded`}>Poison</Text>
        <Text style={tw`text-white text-[13px] ${danger === "Yes"?"bg-red-500":"bg-green-500"} p-1 rounded`}>Danger</Text>
        </View>
        <Text style={tw`text-white`}>{detail}</Text>
      </View>
     </ScrollView>
     </View>
    </View>
  );
};

export default detail;
