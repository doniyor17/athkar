import { View, Text, Pressable, ImageBackground } from "react-native";

import AppGradient from "@/components/AppGradient";
import Card from "@/components/Card";

import AntDesign from "@expo/vector-icons/AntDesign";
import IMAGES from "@/constants/BgImages";
import Colors from "@/constants/Colors";
export default function RootLayout() {
  const onMorningCardPress = () => {
    console.log("Pressed Morning Card");
  };

  const morningBtnPress = () => {
    console.log("Pressed morning play button");
  };

  const eveningCardPress = () => {
    console.log("Pressed Evening Card");
  };

  const eveningBtnPress = () => {
    console.log("Pressed evening play button");
  };

  return (
    <AppGradient colors={[Colors.greeny, Colors.primary]}>
      <View className="flex-1 items-center justify-center">
        <View className="items-center justify-between">
          <Card
            title="Tonggi zikrlar"
            imageSrc={IMAGES[0].toString()}
            onPressCard={onMorningCardPress}
            onPressPlay={morningBtnPress}
          />
          <Card
            title="Kechki zikrlar"
            imageSrc={IMAGES[0].toString()}
            onPressCard={eveningCardPress}
            onPressPlay={eveningBtnPress}
          />
        </View>
      </View>
    </AppGradient>
  );
}
