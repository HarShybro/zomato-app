import { View, Text, Pressable, ScrollView, StatusBar } from "react-native";
import React, { useContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../StackNavigator";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  Feather,
  AntDesign,
  FontAwesome6,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import Menu from "../components/hotel/Menu";
import { menuItem } from "../data/categories";

import { Imenu } from "../components/hotel/Menu";
import { cartItems } from "../context/Context";
import ViewCart from "../components/hotel/ViewCart";

type Props = NativeStackScreenProps<RootStackParamList, "hotel">;
export default function HotelScreen({ route }: Props) {
  const navigation = useNavigation();
  const { cart, setCart } = useContext(cartItems);
  console.log("Items added", cart);
  console.log("length of cart", cart.length);
  return (
    <>
      <StatusBar translucent={false} backgroundColor={"black"} />
      <ScrollView>
        <View className="flex-row items-center justify-between">
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={50} color="blue" />
          </Pressable>
          <View className="flex-row space-x-3">
            <Feather name="bookmark" size={30} color="black" />
            <Feather name="camera" size={30} color="black" />
            <Feather name="share-2" size={30} color="black" />
          </View>
        </View>

        <View className="flex-row justify-between pl-1">
          <View className="space-y-1">
            <Text className="text-xl font-bold">{route.params.name}</Text>
            <Text className="text-base text-gray-500 font-semibold">
              {route.params.cuisines}
            </Text>
            <Text className="text-sm text-blue-600 font-medium">
              {route.params.smalladdress}
            </Text>
          </View>

          <View className="justify-around">
            <View className="bg-green-700 flex-row justify-center items-center p-1 rounded-l">
              <Text className="text-white text-base font-bold">
                {route.params.aggregate_rating}
              </Text>
              <AntDesign name="star" size={24} color="white" />
            </View>
            <Text className="bg-pink-500 text-white text-base font-bold p-1 rounded-l">
              30 PHOTOS
            </Text>
          </View>
        </View>

        <View className="mt-6 flex-row justify-around ">
          <View className="flex-row items-center space-x-1">
            <View className="bg-gray-300 p-2 rounded">
              <FontAwesome6 name="motorcycle" size={24} color="black" />
            </View>
            <View>
              <Text>Mode </Text>
              <Text>Delivery</Text>
            </View>
          </View>
          <View className="flex-row items-center space-x-1">
            <View className="bg-gray-300 p-2 rounded">
              <AntDesign name="clockcircleo" size={24} color="black" />
            </View>
            <View>
              <Text>TIME</Text>
              <Text>30 mins or free</Text>
            </View>
          </View>
          <View className="flex-row items-center space-x-1">
            <View className="bg-gray-300 p-2 rounded">
              <MaterialIcons name="local-offer" size={24} color="blue" />
            </View>
            <View>
              <Text>OFFERS</Text>
              <Text>View all</Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center bg-gray-300 p-2 mx-2 mt-4 space-x-2 rounded">
          <Fontisto name="motorcycle" size={24} color="black" />
          <Text className="font-bold"> ₹ 30 additional distance fee</Text>
        </View>

        <View className="px-2 mt-2">
          <Text className="text-xl font-semibold border-b-4 border-pink-600 w-24">
            Full Menu
          </Text>

          {menuItem.map((menu, index) => (
            <Menu index={index} menu={menu} cart={cart} setCart={setCart} />
          ))}
        </View>
      </ScrollView>
      <ViewCart restaurantName={route.params.name} />
    </>
  );
}
