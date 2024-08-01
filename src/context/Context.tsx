import { View, Text } from "react-native";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Imenu } from "../components/hotel/Menu";

export const cartItems = createContext<{
  cart: Imenu[];
  setCart: Dispatch<SetStateAction<Imenu[]>>;
}>({ cart: [], setCart: () => {} });

export default function Context({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Imenu[]>([]);
  return ( 
    <cartItems.Provider value={{ cart, setCart }}>
      {children}
    </cartItems.Provider>
  );
}
