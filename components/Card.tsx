import { useRef } from "react";
import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Animated,
  StyleSheet
} from "react-native";

import AppGradient from "@/components/AppGradient";

import AntDesign from "@expo/vector-icons/AntDesign";
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
  const scaleValue = useRef(new Animated.Value(1)).current;
  const onPressStart = () => {
    Animated.spring(scaleValue, {
      toValue: 0.75, // Scale down slightly
      useNativeDriver: true
    }).start();
  };

  const onPressEnd = () => {
    Animated.spring(scaleValue, {
      toValue: 1, // Scale down slightly
      useNativeDriver: true
    }).start();
  };

  return (
    <View
      className="w-full items-center mb-4"
      style={{
        shadowColor: Colors.dark,
        shadowOpacity: 30,
        shadowRadius: 10
      }}
    >
      <Pressable onPress={onPressCard}>
        <ImageBackground
          source={{ uri: imageSrc }}
          resizeMode="cover"
          className="!rounded-lg"
        >
          <View className="w-[300px] h-[300px] rounded-lg relative">
            <AppGradient colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.7)"]}>
              <Text className="text-center font-bold text-white mt-3 text-4xl mb-10">
                {title}
              </Text>
              <Pressable
                className="z-10 w-24 h-24 rounded-full border-[6px] border-green-700 justify-center items-center absolute bottom-4 right-4"
                onPressIn={onPressStart}
                onPress={onPressPlay}
                onPressOut={onPressEnd}
              >
                <View className="">
                  <Animated.View
                    style={[
                      styles.button,
                      { transform: [{ scale: scaleValue }] }
                    ]}
                  >
                    <AntDesign
                      name="caretright"
                      size={70}
                      color={Colors.whitish}
                    />
                  </Animated.View>
                </View>
              </Pressable>
            </AppGradient>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
