import Home from "@/components/Home";
import Snake from "@/components/Snake";
import {  useState } from "react";
import {
ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";

export default function Index() {
 
  const [page,setPage] = useState('')

  const getPage = () => {
    switch (page) {
      case "snake":
        
        return <Snake/>;
    
      default:
        return<Home/>;
    }
  }

  

  return (
    <View style={tw`bg-black`}>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity onPress={()=>setPage('')} style={tw`flex-1 text-center`}>
          <Text style={tw`text-center text-white p-3 ${page === ''?"border-b-2 border-blue-400 ":""}`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setPage('snake')} style={tw`flex-1 text-center`}>
          <Text style={tw`text-center text-white p-3 ${page === 'snake'?"border-b-2 border-blue-400 ":""}`}>Snake</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={tw` bg-black`}>
       {getPage()}
      </ScrollView>
    </View>
  );
}
