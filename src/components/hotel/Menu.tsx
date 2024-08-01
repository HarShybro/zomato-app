import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { menuItem } from "../../data/categories";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export interface Imenu {
  id: string;
  name: string;
  price: string;
  review: number;
  star: number;
  bestSeller?: string;
  image: string;
  mustTry?: string;
}
export default function Menu({
  menu,
  cart,
  setCart,
  index,
}: {
  menu: Imenu;
  cart: Imenu[];
  setCart: React.Dispatch<React.SetStateAction<Imenu[]>>;
  index: number;
}) {
  const bestseller = true;
  const [addItem, setAddItem] = useState(0);
  return (
    <View key={index}>
      <View
        className="py-2 flex-row items-center justify-between"
        key={menu.id}
      >
        <View>
          <Text className="text-base font-semibold">{menu.name}</Text>
          <Text>{menu.price}</Text>
          <View className="flex-row items-center space-x-3">
            <View className="flex-row mt-2">
              {[0, 0, 0, 0, 0].map((en, i) => (
                <FontAwesome
                  key={i}
                  name={i < Math.floor(menu.star) ? "star" : "star-o"}
                  size={24}
                  color="orange"
                />
              ))}
            </View>
            <Text className="bg-pink-200 text-white px-1 py-1 text-center shadow shadow-purple-500 rounded">
              {(bestseller && menu.bestSeller) || menu.mustTry}
            </Text>
          </View>
          <View className="flex-row space-x-2">
            <View className="rounded-full border p-2">
              <AntDesign name="hearto" size={24} color="pink" />
            </View>
            <View className="rounded-full border p-2">
              <AntDesign name="sharealt" size={24} color="pink" />
            </View>
          </View>
        </View>
        <View className="relative">
          <Image
            source={{ uri: menu.image }}
            className="w-36 h-36 rounded-lg"
          />
          <View className="absolute bg-red-400 flex-row bottom-0 left-4 w-28 justify-between px-4 py-2 rounded-lg ">
            <Pressable
              onPress={() => {
                setCart(cart.filter((item) => item.id !== menu.id));
                setAddItem(Math.max(0, addItem - 1));
              }}
            >
              <Text className="text-xl">-</Text>
            </Pressable>
            <Text className="text-xl">{addItem}</Text>
            <Pressable
              onPress={() => {
                setCart([...cart, menu]);
                setAddItem(addItem + 1);
              }}
            >
              <Text className="text-xl">+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
