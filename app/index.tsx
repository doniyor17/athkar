import { View } from "react-native";
import { router } from "expo-router";

import AppGradient from "@/components/AppGradient";
import Card from "@/components/Card";

import IMAGES from "@/constants/BgImages";
import Colors from "@/constants/Colors";
export default function RootLayout() {
  const onMorningCardPress = () => {
    console.log("Pressed Morning Card");
  };

  const morningBtnPress = () => {
    router.push("/(modal)/playAthkar");
  };

  const eveningCardPress = () => {
    console.log("Pressed Evening Card");
  };

  const eveningBtnPress = () => {
    router.push("/(modal)/playAthkar");
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
