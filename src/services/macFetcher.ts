import { MANFRED_MAC_URL } from "@env";
import fetcher from "./fetcher";
import { ManfredAwesomicCV } from "../models/ManfredAwesomicCV";
import { PublicProfile } from "../models/PublicProfile";

const mapToPublicProfile = (mac: ManfredAwesomicCV): PublicProfile => ({
  name: mac.aboutMe.profile.name,
  surnames: mac.aboutMe.profile.surnames,
  avatarUrl: mac.aboutMe.profile?.avatar?.link as string,
  city: mac.aboutMe.profile.location?.municipality,
  description: mac.aboutMe.profile.description,
  title: mac.aboutMe.profile.title,
});

const macFetcher = async (): Promise<PublicProfile> => {
  const manfredMacProfile = await fetcher<ManfredAwesomicCV>({
    endpoint: MANFRED_MAC_URL,
  });
  return mapToPublicProfile(manfredMacProfile);
};

export default macFetcher;
