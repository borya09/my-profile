import { TeleportPhoto } from "../models/TeleportPhoto";
import fetcher from "./fetcher";

const mapToImageUrl = (teleportPhoto: TeleportPhoto): string => {
  return teleportPhoto.photos[0].image.web;
};

const cityUrlFetcher = async (city: string): Promise<string> => {
  const teleportPhoto = await fetcher<TeleportPhoto>({
    endpoint: `https://api.teleport.org/api/urban_areas/slug:${city.toLocaleLowerCase()}/images/`,
  });
  return mapToImageUrl(teleportPhoto);
};

export default cityUrlFetcher;
