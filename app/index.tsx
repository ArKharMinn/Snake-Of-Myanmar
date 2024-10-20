import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

export default function Index() {
  const list = useSelector((state) => state.list);
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    setShowList(list);
  }, [list]);

  return (
    <View style={tw``}>
      <View style={tw` h-8`}></View>
      <ScrollView>
        <View style={tw`flex-row pb-15 bg-black pt-3 flex-wrap gap-2 items-center justify-center`}>
        {showList.map((item) => {
          return (
            <TouchableOpacity key={item.Id} onPress={()=>router.push(`/detail/${item.Id}`)} style={tw``}>
             
              <ImageBackground
                source={item.img}
                resizeMode="cover"
                style={tw`w-40 h-40 p-2`}
              >
                <Text style={tw`text-white top-25 bg-black rounded text-center p-1`}>{item.MMName}</Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
        </View>
       
      </ScrollView>
    </View>
  );
}
