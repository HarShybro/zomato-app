import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { itemImag } from "../../data/categories";

export default function ImageHolder() {
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-2 m-1"
      >
        {itemImag.map((item, index) => {
          return (
            <View className="m-1" key={index}>
              <Image source={item.img} className="w-52 h-36 rounded-lg" />
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}
