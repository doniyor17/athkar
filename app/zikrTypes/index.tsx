import { useEffect, useState } from "react";
import { AthkarData } from "@/models/interface";
import { useLocalSearchParams } from "expo-router";

import AppGradient from "@/components/AppGradient";
import BackButton from "@/components/BackButton";
import ShowZikr from "@/components/ShowZikr";

import Colors from "@/constants/Colors";
import ATHKAR from "@/constants/athkar";

const ZikrTypes = () => {
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
      <ShowZikr data={data} />
    </AppGradient>
  );
};

export default ZikrTypes;
