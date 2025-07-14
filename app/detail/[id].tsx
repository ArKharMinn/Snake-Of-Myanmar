import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Share,
  Animated,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

type SnakeDetail = {
  Id: Number;
  img: String;
  MMName: String;
  EngName: String;
  IsPoison: Boolean;
  IsDanger: Boolean;
  Detail: String;
};

const DetailScreen = () => {
  const { id } = useLocalSearchParams();
  const list = useSelector((state: any) => state.list) as SnakeDetail[];
  const [snakeDetail, setSnakeDetail] = useState<any>(null);
  const scrollY = new Animated.Value(0);

  useEffect(() => {
    const foundSnake = list.find((item) => item.Id === Number(id));
    setSnakeDetail(foundSnake || null);
  }, [id, list]);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out ${snakeDetail.MMName} (${snakeDetail.EngName}) - ${
          snakeDetail.IsPoison === "Yes" ? "⚠️ Poisonous" : "✅ Non-poisonous"
        } snake from Myanmar`,
        url: snakeDetail.img,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  if (!snakeDetail) {
    return (
      <View style={tw`flex-1 bg-gray-900 items-center justify-center`}>
        <ActivityIndicator size="large" color="#f59e0b" />
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-gray-900`}>
      <StatusBar barStyle="light-content" />

      {/* Animated Header */}
      <Animated.View
        style={[
          tw`absolute top-0 left-0 right-0 z-10 bg-gray-900/90 pt-12 pb-3 px-4`,
          { opacity: headerOpacity },
        ]}
      >
        <Text
          style={tw`text-white text-lg font-bold text-center`}
          numberOfLines={1}
        >
          {snakeDetail.MMName}
        </Text>
      </Animated.View>

      <ScrollView
        contentContainerStyle={tw`pb-20`}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Hero Image */}
        <View style={tw`relative`}>
          <Image
            source={snakeDetail.img}
            style={tw`w-full h-96`}
            resizeMode="cover"
          />
          <View
            style={tw`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent`}
          />
        </View>

        {/* Floating Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={tw`absolute top-12 left-4 bg-gray-900/50 rounded-full p-2 z-20`}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Floating Share Button */}
        <TouchableOpacity
          onPress={handleShare}
          style={tw`absolute top-12 right-4 bg-gray-900/50 rounded-full p-2 z-20`}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons
            name="share-variant"
            size={20}
            color="white"
          />
        </TouchableOpacity>

        {/* Content Container */}
        <View style={tw`px-5 -mt-8`}>
          {/* Title Card */}
          <View style={tw`bg-gray-800 rounded-xl p-6 shadow-lg mb-6`}>
            <View style={tw`flex-row justify-between items-start`}>
              <View style={tw`flex-1`}>
                <Text style={tw`text-xl font-bold text-white mb-1`}>
                  {snakeDetail.MMName}
                </Text>
                <Text style={tw`text-xl text-amber-300 mb-4`}>
                  {snakeDetail.EngName}
                </Text>
              </View>

              {/* Danger Indicators */}
              <View style={tw`flex-row gap-2`}>
                <View style={tw`items-center`}>
                  <MaterialCommunityIcons
                    name={
                      snakeDetail.IsPoison === "Yes"
                        ? "bottle-tonic-skull"
                        : "bottle-tonic-plus"
                    }
                    size={28}
                    color={
                      snakeDetail.IsPoison === "Yes" ? "#ef4444" : "#10b981"
                    }
                  />
                  <Text style={tw`text-xs text-gray-400 mt-1`}>
                    {snakeDetail.IsPoison === "Yes" ? "Poison" : "No Poison"}
                  </Text>
                </View>
                <View style={tw`items-center`}>
                  <MaterialCommunityIcons
                    name={
                      snakeDetail.IsDanger === "Yes"
                        ? "alert-octagon"
                        : "shield-check"
                    }
                    size={28}
                    color={
                      snakeDetail.IsDanger === "Yes" ? "#ef4444" : "#10b981"
                    }
                  />
                  <Text style={tw`text-xs text-gray-400 mt-1`}>
                    {snakeDetail.IsDanger === "Yes" ? "Danger" : "Safe"}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Description */}
          <View style={tw`bg-gray-800 rounded-xl p-6 shadow-lg mb-6`}>
            <View style={tw`flex-row items-center mb-4`}>
              <MaterialCommunityIcons
                name="text-box"
                size={24}
                color="#f59e0b"
              />
              <Text style={tw`text-xl font-bold text-white ml-3`}>
                Description
              </Text>
            </View>
            <Text style={tw`text-gray-300 leading-6`}>
              {snakeDetail.Detail}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
