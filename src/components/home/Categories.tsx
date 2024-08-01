import { View, Text, ScrollView } from "react-native";
import React from "react";
import { items } from "../../data/categories";
export default function Categories() {
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: 2 }}
      >
        {items.map((item) => {
          return (
            <View
              key={item.id}
              className="flex border-gray-200 border p-2 rounded-xl m-2 my-2 shadow shadow-black bg-white"
            >
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}
