interface AthkarData {
  id: number | string;
  title?: string;
  textAr: string;
  text: string;
  audioSrc: string;
  repetance: number;
  meaning?: string;
  origin?: string;
  description?: string;
}
interface Athkar {
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

export default Athkar;
