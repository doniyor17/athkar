import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Content from "./Content";
interface LinearGradientProps {
  colors: string[];
  children: React.ReactNode;
}
const AppGradient = ({ colors, children }: LinearGradientProps) => {
  return (
    <LinearGradient
      className="flex-1"
      colors={colors}
    >
      <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
