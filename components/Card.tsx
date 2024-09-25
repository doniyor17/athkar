import AppGradient from "@/components/AppGradient";
import { View, Text, Pressable, ImageBackground } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import IMAGES from "@/constants/BgImages";
import Colors from "@/constants/Colors";

interface CardProps {
  title: string;
  imageSrc: string;
  onPressCard: () => void;
  onPressPlay: () => void;
}
export default function Card({
  title,
  imageSrc,
  onPressCard,
  onPressPlay
}: CardProps) {
  return (
    <View className="w-full shadow-md items-center mb-3">
      <Pressable
        onPress={onPressCard}
        className="rounded-3xl"
      >
        <ImageBackground
          source={{ uri: imageSrc }}
          resizeMode="cover"
          className="!rounded-lg"
        >
          <View className="w-[300px] h-[300px] rounded-lg relative">
            <AppGradient colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.3)"]}>
              <Text className="text-center font-bold text-white mt-3 text-4xl mb-10">
                {title}
              </Text>
              <Pressable
                className="z-10 w-24 h-24 rounded-full border-[6px] border-green-700 justify-center items-center absolute bottom-4 right-4"
                onPress={onPressPlay}
              >
                <View className="">
                  <AntDesign
                    name="caretright"
                    size={70}
                    color={Colors.whitish}
                  />
                </View>
              </Pressable>
            </AppGradient>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}
