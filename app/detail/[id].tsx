import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";

const detail = () => {
  const { id } = useLocalSearchParams();
  const list = useSelector((state) => state.list);
  const snake = list.find((item: any) => item.Id == Number(id));
  const [snakeDetail, setSnakeDetail] = useState<any>("");

  useEffect(() => {
    setSnakeDetail(snake);
  }, []);
  return (
    <View style={tw`relative`}>
        <TouchableOpacity style={tw`absolute top-2 z-50 left-4`} onPress={() => router.back()}>
          <Ionicons
            name="arrow-back-circle-sharp"
            style={tw`p-3 text-gray-300`}
            size={30}
          />
        </TouchableOpacity>
      <View style={tw`h-full bg-black`}>
        <ScrollView contentContainerStyle={tw`p-3 pb-10`}>
          <View style={tw` gap-3`}>
            <View style={tw`flex items-center justify-center`}>
              <Image source={snakeDetail.img} style={tw`w-80 h-80 rounded`} />
            </View>
            <Text style={tw`text-white text-xl font-bold`}>
              {snakeDetail.MMName}
            </Text>
            <View style={tw`flex-row items-center gap-3`}>
              <Text style={tw`text-white text-lg`}>{snakeDetail.EngName}</Text>
              <Text
                style={tw`text-white text-[13px] ${
                  snakeDetail.IsPoison === "Yes" ? "bg-red-500" : "bg-green-500"
                } p-1 rounded`}
              >
                Poison
              </Text>
              <Text
                style={tw`text-white text-[13px] ${
                  snakeDetail.IsDanger === "Yes" ? "bg-red-500" : "bg-green-500"
                } p-1 rounded`}
              >
                Danger
              </Text>
            </View>
            <Text style={tw`text-white`}>{snakeDetail.Detail}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default detail;
