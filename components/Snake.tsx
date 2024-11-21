import { router } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import tw from 'twrnc'

const Snake = () => {
    const list = useSelector((state) => state.list);
    const [showList, setShowList] = useState<any>([]);

    useEffect(() => {
        setShowList(list);
      }, []);
  return (
    <View
    style={tw`flex-row pb-15 bg-black pt-3 flex-wrap gap-2 items-center justify-center`}
  >
    {showList.map((item: any) => {
      return (
        <TouchableOpacity
          key={item.Id}
          onPress={() => router.push(`/detail/${item.Id}`)}
          style={tw``}
        >
          <ImageBackground
            source={item.img}
            resizeMode="cover"
            style={tw`w-40 h-40 relative p-2 items-center justify-center`}
          >
            <View
              style={tw`bottom-2 absolute bg-black bg-opacity-60 rounded p-1`}
            >
             <Text style={tw`text-white text-center`}> {item.MMName}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    })}
  </View>
  )
}

export default Snake
