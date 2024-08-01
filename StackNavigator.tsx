import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import HotelScreen from "./src/screens/HotelScreen";
import OrderScreen from "./src/screens/OrderScreen";

interface Ihotel {
  id: string;
  featured_image: string;
  name: string;
  cuisines: string;
  average_cost_for_two: number;
  aggregate_rating: number;
  address: string;
  smalladdress: string;
  offer: string;
  no_of_Delivery: number;
  latitude: number;
  longitude: number;
  time: string;
}

export type RootStackParamList = {
  home: undefined;
  hotel: {
    readonly id: string;
    name: string;
    aggregate_rating: number;
    address: string;
    smalladdress: string;
    cuisines: string;
  };
  order: { restaurantName: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="hotel" component={HotelScreen} />
        <Stack.Screen name="order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
