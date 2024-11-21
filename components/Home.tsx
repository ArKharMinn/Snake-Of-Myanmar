import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const Home = () => {
  const snake = useSelector((state) => state.home);
  const [about, setAbout] = useState<any>("");
  const [more, setMore] = useState(false);

  useEffect(() => {
    setAbout(snake);
  }, []);
  return (
    <View style={tw`px-3 gap-3 pt-3 pb-20`}>
      <Image
        style={tw`h-70 w-full`}
        source={require("@/assets/images/home.jpg")}
      />
      <View style={tw``}>
        <Text style={tw`text-white text-xl font-medium mb-2`}>About</Text>
        <Text
          style={tw`text-white`}
          numberOfLines={more ? 0 : 3}
          ellipsizeMode="tail"
        >
          {about.about}
        </Text>
        <TouchableOpacity onPress={() => setMore(!more)}>
          <Text style={tw`text-gray-400 text-right underline`}>
            {more ? "see less" : "see more"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`gap-4 border-t-[1px] border-gray-300 pt-4`}>
        <View style={tw``}>
          <Text style={tw`text-white text-lg`}>လောက</Text>
          <Text style={tw`text-gray-400 text-[12px]`}>Animalia</Text>
        </View>
        <View style={tw``}>
          <Text style={tw`text-white text-lg`}>မျိုးပေါင်းစု: </Text>
          <Text style={tw`text-gray-400 text-[12px]`}>Chordata</Text>
        </View>
        <View style={tw``}>
          <Text style={tw`text-white text-lg`}>မျိုးပေါင်း</Text>
          <Text style={tw`text-gray-400 text-[12px]`}>Reptilia</Text>
        </View>
        <View style={tw``}>
          <Text style={tw`text-white text-lg`}>မျိုးစဉ် </Text>
          <Text style={tw`text-gray-400 text-[12px]`}>Squamata</Text>
        </View>
        <View style={tw``}>
          <Text style={tw`text-white text-lg`}>Clade</Text>
          <Text style={tw`text-gray-400 text-[12px]`}>Ophidia</Text>
        </View>
        <View style={tw``}>
          <Text style={tw`text-white text-lg`}>မျိုးစဉ်သေး</Text>
          <Text style={tw`text-gray-400 text-[12px]`}>Serpentes</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
