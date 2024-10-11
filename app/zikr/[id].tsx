import { View, Text, ScrollView, Platform } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

import { AthkarData } from "@/models/interface";

import AppGradient from "@/components/AppGradient";
import Colors from "@/constants/Colors";

import ATHKAR from "@/constants/athkar";
import BackButton from "@/components/BackButton";

const SingleZikr = () => {
  const { id } = useLocalSearchParams();
  const [zikr, setZikr] = useState<AthkarData | null>(null);

  useEffect(() => {
    setZikr(ATHKAR.uz.data[Number(id) - 1]);
  }, [id]);
  return (
    <AppGradient colors={[Colors.greeny, Colors.primary]}>
      <BackButton />
      <ScrollView
        className="pt-4 pb-3"
        style={
          Platform.OS === "android" ? { marginTop: 20 } : { marginBottom: -20 }
        }
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* //TODO: Add some styles */}

        <Text className="text-2xl leading-[40px] text-white mb-4">
          {zikr?.textAr}
        </Text>
        <Text
          className="text-2xl text-white mb-4"
          style={
            Platform.OS === "android" && { fontSize: 18, fontWeight: "700" }
          }
        >
          {zikr?.text}
        </Text>
        <Text
          className="text-xl text-white"
          style={Platform.OS === "android" && { fontSize: 16 }}
        >
          {zikr?.description}
        </Text>
        <Text
          className="text-xl text-white"
          style={Platform.OS === "android" && { fontSize: 14 }}
        >
          {zikr?.meaning}
        </Text>
        <Text
          className="text-xl text-white mb-1"
          style={Platform.OS === "android" && { fontSize: 14 }}
        >
          Қайтарилиши: {zikr?.repetance + " марта"}
        </Text>
        <Text
          className="text-xl text-white italic pb-10"
          style={Platform.OS === "android" && { fontSize: 14 }}
        >
          {zikr?.origin}
        </Text>
      </ScrollView>
    </AppGradient>
  );
};

export default SingleZikr;
