import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { categoriesImg } from "../../data/categories";

export default function FoodCategories() {
  return (
    <>
      <View className="mx-2">
        <Text className="text-xl font-semibold">Eat What makes you happy</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categoriesImg.map((item, index) => {
            return (
              <View className="m-2" key={index}>
                <View
                  className="bg-slate-300 rounded-full border border-orange-100"
                  style={{
                    elevation: 3,
                    shadowColor: "orange",
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    className="w-20 h-20 rounded-full bg-white "
                    resizeMode="contain"
                  />
                </View>
                <Text
                  numberOfLines={2}
                  style={{ width: 80, color: "gray", textAlign: "center" }}
                >
                  {item.name}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
