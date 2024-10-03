import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Content from "./Content";
import { Platform } from "react-native";
interface LinearGradientProps {
  colors: string[];
  children: React.ReactNode;
}
const AppGradient = ({ colors, children }: LinearGradientProps) => {
  return (
    <LinearGradient
      className="flex-1 pt-5"
      style={Platform.OS === "android" && { paddingTop: 10 }}
      colors={colors}
    >
      <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
