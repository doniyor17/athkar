export interface AthkarData {
  id: number | string;
  title?: string;
  textAr: string;
  text: string;
  audioSrc: string;
  repetance: number;
  meaning?: string;
  origin?: string;
  description?: string;
  orderMorning?: number;
  orderEvening?: number;
  for?: "morning" | "evening" | "both";
}
export interface Athkar {
  uz: {
    data: AthkarData[];
  };
  en: {
    data: AthkarData[];
  };
  ru: {
    data: AthkarData[];
  };
}
