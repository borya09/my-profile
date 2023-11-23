import { MANFRED_MAC_URL } from "@env";
import fetcher from "./fetcher";
import { ManfredAwesomicCV } from "../models/ManfredAwesomicCV";
import { PublicProfile } from "../models/PublicProfile";
import mapToPublicProfile from "./macToPublicProfileMapper";

const macFetcher = async (): Promise<PublicProfile> => {
  const manfredMacProfile = await fetcher<ManfredAwesomicCV>({
    endpoint: MANFRED_MAC_URL,
  });
  return mapToPublicProfile(manfredMacProfile);
};

export default macFetcher;
