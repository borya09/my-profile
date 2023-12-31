import { useEffect, useState } from "react";
import teleportCityUrlFetcher from "../services/teleportCityUrlFetcher";

export default function useFetchCityUrl(city: string) {
  const [url, setUrl] = useState<string | undefined>();

  useEffect(() => {
    const fetchCityImageUrl = async (city: string) => {
      const imageUrl = await teleportCityUrlFetcher(city);
      setUrl(imageUrl);
    };

    fetchCityImageUrl(city);
  }, [city]);

  return {
    url,
  };
}
