import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import Context from "./src/context/Context";

export default function App() {
  return (
    <Context>
      <StatusBar translucent={false} />
      <StackNavigator />
    </Context>
  );
}
