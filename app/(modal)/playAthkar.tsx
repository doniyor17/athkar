import { Text, FlatList, View, Platform } from "react-native";

import AppGradient from "@/components/AppGradient";
import BackButton from "@/components/BackButton";

import Colors from "@/constants/Colors";

import ATHKAR from "@/constants/athkar";
import { useEffect, useState } from "react";
import { AthkarData } from "@/models/interface";
import { useLocalSearchParams } from "expo-router";

const PlayAthkarModal = () => {
  const { type } = useLocalSearchParams();

  const [data, setData] = useState<AthkarData[]>([]);

  useEffect(() => {
    if (type === "morning") {
      const filteredMorningAthkar = ATHKAR.uz.data
        .filter(item => item.orderMorning)
        .sort((a, b) => a.orderMorning! - b.orderMorning!);

      setData(filteredMorningAthkar);
    } else {
      const filteredEveningAthkar = ATHKAR.uz.data
        .filter(item => item.orderEvening)
        .sort((a, b) => a.orderEvening! - b.orderEvening!);

      setData(filteredEveningAthkar);
    }
  }, [type]);

  return (
    <AppGradient colors={[Colors.primary, Colors.greeny, Colors.primary]}>
      <BackButton />
      <FlatList
        className="pt-1"
        style={Platform.OS === "android" && { marginTop: 20 }}
        data={data}
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
            <Text
              className="text-xl font-normal text-white mb-1"
              style={
                Platform.OS === "android"
                  ? { fontSize: 22, paddingTop: 14 }
                  : { fontSize: 20 }
              }
            >
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
