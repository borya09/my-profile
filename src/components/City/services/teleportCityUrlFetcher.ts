import { TeleportPhoto } from "../models/TeleportPhoto";
import fetcher from "../../../services/fetcher";

const mapToImageUrl = (teleportPhoto: TeleportPhoto): string => teleportPhoto.photos[0].image.mobile;

const teleportCityUrlFetcher = async (city: string): Promise<string> => {
  const teleportPhoto = await fetcher<TeleportPhoto>({
    endpoint: `https://api.teleport.org/api/urban_areas/slug:${city.toLocaleLowerCase()}/images/`,
  });
  return mapToImageUrl(teleportPhoto);
};

export default teleportCityUrlFetcher;
