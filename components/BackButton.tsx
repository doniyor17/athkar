import { Pressable } from "react-native";
import { router } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

const BackButton = () => {
  const goBack = () => {
    router.back();
  };
  return (
    <Pressable
      onPress={goBack}
      className="absolute top-5 left-5"
    >
      <Ionicons
        name="arrow-back"
        size={35}
        color="white"
      />
    </Pressable>
  );
};

export default BackButton;
