import { useEffect, useState } from "react";
import cityUrlFetcher from "../services/cityUrlFetcher";

export default function useFetchCityUrl(city: string) {
  const [url, setUrl] = useState<string | undefined>();

  const fetchCityImageUrl = async (city: string) => {
    const imageUrl = await cityUrlFetcher(city);
    setUrl(imageUrl);
  };

  useEffect(() => {
    fetchCityImageUrl(city);
  }, [city]);

  return {
    url,
  };
}
