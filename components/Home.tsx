import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";

type SnakeData = {
  about: string;
};

const Home = () => {
  const snake = useSelector((state: any) => state.home) as SnakeData;
  const [about, setAbout] = useState<string>("");
  const [showFullAbout, setShowFullAbout] = useState(false);

  useEffect(() => {
    if (snake?.about) {
      setAbout(snake.about);
    }
  }, [snake]);

  const taxonomyData = [
    { label: "လောက", value: "Animalia", icon: "pets" },
    { label: "မျိုးပေါင်းစု", value: "Chordata", icon: "linear-scale" },
    { label: "မျိုးပေါင်း", value: "Reptilia", icon: "settings-ethernet" },
    { label: "မျိုးစဉ်", value: "Squamata", icon: "view-sequential" },
    { label: "Clade", value: "Ophidia", icon: "family-restroom" },
    { label: "မျိုးစဉ်သေး", value: "Serpentes", icon: "view-comfy" },
  ];

  return (
    <ScrollView
      style={tw`bg-gray-900`}
      contentContainerStyle={tw`pb-20`}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero Image with Overlay Title */}
      <View style={tw`relative`}>
        <Image
          style={tw`h-64 w-full`}
          source={require("@/assets/images/home.jpg")}
          resizeMode="cover"
        />
        <View style={tw`absolute inset-0 bg-black opacity-30`} />
        <View style={tw`absolute bottom-4 left-4`}>
          <Text style={tw`text-lg text-amber-200`}>Snake of Myanmar</Text>
        </View>
      </View>

      {/* Content Container */}
      <View style={tw`px-2 -mt-6`}>
        {/* About Section */}
        <View style={tw`bg-gray-800 p-6 rounded-xl shadow-lg mb-6`}>
          <View style={tw`flex-row items-center mb-4`}>
            <MaterialIcons name="info" size={24} color="#f59e0b" />
            <Text style={tw`text-white text-xl font-bold ml-2`}>About</Text>
          </View>
          <Text
            style={tw`text-gray-300 leading-6`}
            numberOfLines={showFullAbout ? undefined : 4}
            ellipsizeMode="tail"
          >
            {about}
          </Text>
          <TouchableOpacity
            onPress={() => setShowFullAbout(!showFullAbout)}
            activeOpacity={0.7}
            style={tw`mt-2 flex-row items-center justify-end`}
          >
            <Text style={tw`text-amber-400 mr-1`}>
              {showFullAbout ? "Show less" : "Read more"}
            </Text>
            <MaterialIcons
              name={showFullAbout ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={20}
              color="#f59e0b"
            />
          </TouchableOpacity>
        </View>

        {/* Taxonomy Section */}
        <View style={tw`bg-gray-800 p-6 rounded-xl shadow-lg`}>
          <View style={tw`flex-row items-center mb-4`}>
            <MaterialIcons name="category" size={24} color="#f59e0b" />
            <Text style={tw`text-white text-xl font-bold ml-2`}>Taxonomy</Text>
          </View>

          <View style={tw`border-l-2 border-amber-500 pl-4`}>
            {taxonomyData.map((item, index) => (
              <View
                key={index}
                style={tw`mb-4 flex-row items-start ${
                  index === taxonomyData.length - 1 ? "mb-0" : ""
                }`}
              >
                <MaterialIcons
                  name={item.icon}
                  size={20}
                  color="#9ca3af"
                  style={tw`mt-1 mr-3`}
                />
                <View>
                  <Text style={tw`text-amber-100 text-base font-medium`}>
                    {item.label}
                  </Text>
                  <Text style={tw`text-gray-400 text-sm mt-1`}>
                    {item.value}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
