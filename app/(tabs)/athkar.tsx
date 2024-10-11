import { useEffect, useState } from "react";
import { Text, FlatList, Platform, Pressable } from "react-native";
import { Href, router } from "expo-router";

import AppGradient from "@/components/AppGradient";
import BackButton from "@/components/BackButton";

import { AthkarData } from "@/models/interface";
import Colors from "@/constants/Colors";
import ATHKAR from "@/constants/athkar";

const Zikr = () => {
  const slicer = (word: string) => {
    return word.slice(0, 35) + "...";
  };
  const onClickAzkar = (id: number | string) => () => {
    router.push(("/zikr/" + String(id)) as Href<string>);
  };
  const [data, setData] = useState<AthkarData[]>([]);

  useEffect(() => {
    setData(ATHKAR.uz.data.slice(2, ATHKAR.uz.data.length));
  }, []);
  return (
    <AppGradient colors={[Colors.primary, Colors.greeny, Colors.primary]}>
      <BackButton />
      <FlatList
        className="pt-1"
        style={
          Platform.OS === "android" ? { marginTop: 20 } : { marginBottom: -40 }
        }
        data={data}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Pressable
            className="mb-3 border-2 border-white p-3 rounded-lg shadow-md"
            onPress={onClickAzkar(item.id)}
          >
            <Text className="text-lg text-white mb-0">
              {index + 1}. {slicer(item.text)}
            </Text>
          </Pressable>
        )}
      />
    </AppGradient>
  );
};

export default Zikr;
