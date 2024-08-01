import { View, Text, TextInput, ScrollView, StatusBar } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../components/home/Categories";
import ImageHolder from "../components/home/ImageHolder";
import FoodCategories from "../components/home/FoodCategories";
import Hotel from "../components/home/Hotel";

export default function HomeScreen() {
  return (
    <ScrollView>
      <StatusBar translucent={false} backgroundColor={"black"} />
      <View className="flex-row space-x-2 border-gray-300 rounded-xl p-2 m-2 shadow-lg bg-white shadow-black">
        <AntDesign name="search1" size={24} color="red" />
        <TextInput
          placeholder="Restaurant name, cuisines or dish."
          className="text-base"
        />
      </View>
      <Categories />
      <ImageHolder />
      <FoodCategories />
      <Hotel />
    </ScrollView>
  );
}
