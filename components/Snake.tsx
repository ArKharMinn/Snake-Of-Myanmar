import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 - 20;

type Snake = {
  Id: Number;
  img: String;
  MMName: String;
};

const Snake = () => {
  const list = useSelector((state: any) => state.list) as Snake[];
  const [showList, setShowList] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (list.length > 0) {
      setShowList(list);
      setLoading(false);
    }
  }, [list]);

  if (loading) {
    return (
      <View style={tw`flex-1 bg-gray-900 items-center justify-center`}>
        <ActivityIndicator size="large" color="#f59e0b" />
        <Text style={tw`text-white mt-4`}>Loading snakes...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={tw`pb-8 bg-gray-900`}
      showsVerticalScrollIndicator={false}
    >
      <View style={tw`flex-row flex-wrap justify-between`}>
        {showList.map((item: any) => (
          <TouchableOpacity
            key={item.Id}
            onPress={() => router.push(`/detail/${item.Id}`)}
            activeOpacity={0.85}
            style={[
              tw`mb-4 rounded-2xl overflow-hidden border border-gray-800`,
              { width: CARD_WIDTH },
            ]}
          >
            <ImageBackground
              source={item.img}
              resizeMode="cover"
              style={tw`w-full h-48 justify-end`}
              imageStyle={tw`rounded-2xl`}
            >
              {/* Gradient overlay */}
              <View
                style={tw`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent`}
              />

              {/* Content */}
              <View style={tw`p-3`}>
                <Text
                  style={tw`text-white text-lg font-bold mb-1`}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.MMName}
                </Text>
                <View style={tw`flex-row items-center`}>
                  <MaterialIcons
                    name="chevron-right"
                    size={18}
                    color="#f59e0b"
                  />
                  <Text style={tw`text-amber-400 text-xs ml-1`}>
                    View details
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Snake;
