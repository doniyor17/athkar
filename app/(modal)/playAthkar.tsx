import { Text, FlatList, View } from "react-native";

import AppGradient from "@/components/AppGradient";
import BackButton from "@/components/BackButton";

import Colors from "@/constants/Colors";

import ATHKAR from "@/constants/athkar";

const PlayAthkarModal = () => {
  return (
    <AppGradient colors={[Colors.primary, Colors.greeny, Colors.primary]}>
      <BackButton />
      <FlatList
        className="pt-3 mt-3"
        data={ATHKAR.uz.data}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              shadowColor: Colors.dark,
              shadowOpacity: 30,
              shadowRadius: 10
            }}
            className="mb-4 border-2 border-transparent p-4"
          >
            <Text className="text-xl font-normal text-white mb-1">
              {item.textAr}
            </Text>
            <Text className="text-xl text-white mb-2 font-semibold">
              {item.text}
            </Text>
            {item.meaning && (
              <Text className="text-base text-white mb-2">{item.meaning}</Text>
            )}
            {item.description && (
              <Text className="text-lg text-white italic">
                {item.description}
              </Text>
            )}
            {item.origin && (
              <Text className="text-lg text-white italic">{item.origin}</Text>
            )}
          </View>
        )}
      />
    </AppGradient>
  );
};

export default PlayAthkarModal;
