import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { hotelData } from "../../data/categories";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../StackNavigator";

export default function Hotel() {
  const { width } = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <>
      {hotelData.map((item, index) => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate("hotel", {
                id: item.id,
                name: item.name,
                aggregate_rating: item.aggregate_rating,
                address: item.adress,
                smalladdress: item.smalladress,
                cuisines: item.cuisines,
              })
            }
            key={index}
          >
            <View className="m-2 bg-white shadow-xl shadow-black px-1 rounded-t-3xl rounded-b ">
              <View className="relative">
                <Image
                  source={{ uri: item.featured_image }}
                  className="h-52 rounded-t-3xl"
                  style={{ width: width * 0.95, alignSelf: "center" }}
                />
                <View className="absolute bottom-10 bg-blue-500 left-0 px-2 py-1 rounded">
                  <Text className="text-white text-base font-semibold">
                    {item.offer}
                  </Text>
                </View>
                <View className="absolute bg-white right-0 bottom-5 px-2 py-1 rounded">
                  <Text>{item.time}</Text>
                </View>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="py-2 w-52 ">
                  <Text numberOfLines={1} className="text-xl font-semibold">
                    {item.name}
                  </Text>
                  <Text className="text-gray-500">{item.cuisines}</Text>
                </View>
                <View className="flex-row items-center space-x-1 bg-green-400 px-2 py-1 rounded">
                  <Text className="text-white text-base font-medium">
                    {item.aggregate_rating}
                  </Text>
                  <AntDesign name="star" size={24} color="white" />
                </View>
              </View>

              <View className="border-t-2 border-gray-400" />
              <View className="flex-row items-center justify-around my-2">
                <View className="bg-blue-300 p-[10px] w-10 h-10 rounded-full">
                  <AntDesign name="doubleright" size={20} color="white" />
                </View>
                <Text className="text-gray-500">
                  {item.no_of_Delivery} + order placed here{" "}
                </Text>
                <View>
                  <Text className="font-bold">MAX SAFTEY</Text>
                  <Text className="text-gray-500 font-semibold">DELIVERY</Text>
                </View>
              </View>
            </View>
          </Pressable>
        );
      })}
    </>
  );
}
