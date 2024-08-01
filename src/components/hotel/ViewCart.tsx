//ViewCart.tsx
import { View, Text, Pressable, Modal, Alert, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { cartItems } from "../../context/Context";
import {
  Feather,
  AntDesign,
  FontAwesome6,
  MaterialIcons,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../StackNavigator";
import { Audio } from "expo-av";
export type IHotelDetail = {
  restaurantName: string;
};

export default function ViewCart({ restaurantName }: IHotelDetail) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { cart, setCart } = useContext(cartItems);
  const [modalVisible, setModalVisible] = useState(false);
  const total = cart
    .map((item) => Number(item.price.replace("₹", "")))
    .reduce((prev, curr) => prev + curr, 0);
  console.log(total, "Total:");

  const [sound, setSound] = useState<Audio.Sound | null>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/zomato.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  function setPress() {
    setModalVisible(false);
    setCart([]);
    navigation.navigate("order", { restaurantName: restaurantName });

    setTimeout(() => {
      playSound();
    }, 1000);
  }

  const checkout = () => {
    return (
      <View className="bg-transparent justify-end flex-1 ">
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <AntDesign
            name="circledown"
            size={32}
            color="black"
            style={{ textAlign: "center", marginBottom: 10 }}
          />
        </Pressable>
        <View className="h-[400px] bg-white rounded-t-3xl px-2">
          <Text className="text-center p-2 text-red-400 font-bold">
            {restaurantName}
          </Text>
          <View className="flex-row items-center space-x-2">
            <Entypo name="stopwatch" size={24} color="green" />
            <Text className="font-semibold">Delivery in 30 mins</Text>
          </View>
          <View className="border-t border-gray-300 my-2" />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            {cart.map((item, index) => {
              return (
                <View
                  className="flex-row justify-between space-y-2"
                  key={index}
                >
                  <Text className="text-red-400 font-bold">{item.name}</Text>
                  <Text className="text-red-400">{item.price}</Text>
                </View>
              );
            })}
            <View className="border-t border-gray-300 my-2" />
            <View>
              <Text className="text-gray-500 font-semibold">offers</Text>
              <View className="flex-row space-x-1 mt-2">
                <MaterialIcons name="discount" size={24} color="blue" />
                <Text>Select a special promo</Text>
              </View>
            </View>
            <View className="border-t border-gray-300 my-2" />

            <Text className="font-bold">Climate Consious Delivery</Text>
            <View className="flex-row items-center space-x-2 mt-2">
              <Ionicons name="fast-food" size={24} color="green" />
              <View>
                <Text className="font-semibold text-green-400">
                  Don't throw straw and tissues
                </Text>
                <Text className="font-semibold text-gray-400">
                  Thank you for caring the environment
                </Text>
              </View>
            </View>

            <View className="border-t border-gray-300 my-2" />

            <View className="flex-row space-x-2 items-center">
              <Entypo name="leaf" size={24} color="green" />
              <Text className="text-gray-400 font-semibold">
                We fund environment projects to offset carbon footprints of our
                deliveries
              </Text>
            </View>

            <View className="border-t border-gray-300 my-2" />

            <View className="space-y-2 bg-yellow-200 p-2 rounded-lg">
              <View className="flex-row justify-between">
                <Text>Total Price:</Text>
                <Text>₹{total}</Text>
              </View>

              <View className="flex-row justify-between ">
                <Text>Delivery Fee:</Text>
                <Text>₹50</Text>
              </View>

              <View className="flex-row justify-between ">
                <Text>Donation Fee:</Text>
                <Text>₹5</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View className="bg-white flex-row justify-between p-2">
          <Text className="text-base font-bold">Grand Total:</Text>
          <Text className="text-base font-bold">₹{total + 50 + 3}</Text>
        </View>
        <Pressable className="bg-red-600 p-2" onPress={() => setPress()}>
          <Text className="text-center text-white text-xl font-bold">
            Place Order
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {checkout()}
      </Modal>
      {total === 0 ? null : (
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          className="absolute bottom-4 left-28 bg-red-400 px-6 py-3 rounded shadow-inner shadow-white "
        >
          <Text className="text-white">View Cart • ₹{total}</Text>
        </Pressable>
      )}
    </>
  );
}
