import Home from "@/components/Home";
import Snake from "@/components/Snake";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from "react-native";
import tw from "twrnc";

export default function Index() {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
    switch (activeTab) {
      case "snake":
        return <Snake />;
      default:
        return <Home />;
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-900`}>
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />

      {/* App Header */}
      <View style={tw`bg-gray-800 pt-12 pb-3 px-6 shadow-lg`}>
        <View style={tw`flex-row items-center justify-between mb-4`}>
          <View style={tw`flex-row items-center`}>
            {/* App Logo/Icon can be added here */}
            <Text style={tw`text-xl font-bold text-white ml-2`}>
              Snake of Myanmar
            </Text>
          </View>
          {/* Future action button placeholder */}
          <View style={tw`w-8`}></View>
        </View>

        {/* Navigation Tabs */}
        <View style={tw`flex-row`}>
          <TouchableOpacity
            onPress={() => setActiveTab("home")}
            style={tw`flex-1 items-center pb-3 mx-2 ${
              activeTab === "home" ? "border-b-2 border-amber-500" : ""
            }`}
          >
            <Text
              style={tw`text-lg font-semibold ${
                activeTab === "home" ? "text-amber-400" : "text-gray-400"
              }`}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("snake")}
            style={tw`flex-1 items-center pb-3 mx-2 ${
              activeTab === "snake" ? "border-b-2 border-amber-500" : ""
            }`}
          >
            <Text
              style={tw`text-lg font-semibold ${
                activeTab === "snake" ? "text-amber-400" : "text-gray-400"
              }`}
            >
              Snake
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content Area */}
      <ScrollView
        contentContainerStyle={tw`flex-grow p-4`}
        showsVerticalScrollIndicator={false}
        style={tw`bg-gray-900`}
      >
        {renderPage()}
      </ScrollView>

      {/* Bottom Navigation (optional for future expansion) */}
      <View style={tw`bg-gray-800 py-3 px-6 border-t border-gray-700`}>
        <Text style={tw`text-center text-gray-400 text-xs`}>
          © {new Date().getFullYear()} Snake of Myanmar
        </Text>
      </View>
    </View>
  );
}
