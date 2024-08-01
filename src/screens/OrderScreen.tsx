import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { RootStackParamList } from "../../StackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import moment from "moment";
import {
  Feather,
  AntDesign,
  FontAwesome6,
  MaterialIcons,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

interface IOrderScreenProps {
  restaurantName: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "order">;
function OrderScreen({ route }: Props) {
  const time = moment().format("LT");
  const [tip, setTip] = useState(0);
  return (
    <ScrollView className="bg-white">
      <StatusBar translucent={false} backgroundColor={"black"} />
      <Text className="bg-orange-400 text-white text-2xl font-bold">
        {route.params.restaurantName} has accepted your order at {time}
      </Text>
      <View className="border-t-2 border-gray-400" />

      <View className="items-center justify-center">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#ff0090",
            padding: 5,
            borderRadius: 7,
          }}
        >
          <MaterialIcons style={{}} name="timer" size={26} color="#f0fff0" />
          <Text className="text-white font-bold">Delivery in 30 mins</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-orange-300 font-bold text-base mt-2">
            Food preparation will begin shortly
          </Text>
          <MaterialCommunityIcons
            style={{ marginLeft: 10 }}
            name="food-variant"
            size={28}
            color="#ff4d4d"
          />
        </View>

        <Image
          style={{
            width: 200,
            height: 200,
            backgroundColor: "white",
            marginVertical: 16,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpDX04DyRkpYOMZbKFWf9DFV94SrafyNzpwG7nXG2QFcUqTGWmC0ISoM2uU5SUK4bQJw&usqp=CAU",
          }}
        />
      </View>
      <View className="border-t-2 border-gray-400" />
      <View className="flex-row p-5 items-center">
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: "#fff0f5",
            borderWidth: 1,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text className="text-lg font-bold text-red-400 ">
            4 valets near the restaurent
          </Text>
          <Text className="text-lg font-bold text-gray-600 ">
            Anyone will pick your order
          </Text>
        </View>
      </View>
      <View className="border-t-2 border-gray-400" />
      <View className="flex-row p-5">
        <FontAwesome5 name="hand-holding-heart" size={28} color="#ff0080" />
        <View className="flex ml-5">
          <Text className="text-lg font-bold">Tip your hunger Saviour</Text>
          <Text className="text-base font-normal text-gray-600">
            Thank your delivery partner for helping you stay safe
            indoors.Support them through these tough times with a tip
          </Text>
          <View className="flex-row pt-5 justify-between">
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setTip(30)}
              className="bg-gray-100 px-5 py-3 rounded"
            >
              <Text className="text-black font-bold">₹30</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setTip(50)}
              className="bg-gray-100 items-center rounded"
            >
              <Text className="text-black font-bold py-1">₹50</Text>
              <Text
                style={{
                  backgroundColor: "orange",
                  paddingHorizontal: 10,
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Most Tipped
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setTip(70)}
              className="bg-gray-100 px-5 py-3 rounded"
            >
              <Text className="text-black font-bold">₹70</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {tip ? (
        <View>
          <Text className="text-blue-600 px-5 font-bold text-base">
            please pay {"₹"}
            {tip} to your delivery agent at the time of delivery
          </Text>
          <TouchableOpacity
            onPress={() => setTip(0)}
            activeOpacity={0.7}
            className="px-4"
          >
            <Text className="text-red-400 font-bold">(Cancel)</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <Image
        style={{
          width: 190,
          height: 70,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmig-j5FRIsSACRtZfq_bo-u5wiZiALBluOw&usqp=CAU",
        }}
      />
    </ScrollView>
  );
}

export default OrderScreen;
