import { MANFRED_MAC_URL } from "@env";
import fetcher from "./fetcher";
import { ContactMean, ManfredAwesomicCV } from "../models/ManfredAwesomicCV";
import { PublicProfile, PublicProfileContact } from "../models/PublicProfile";
import { ContactType } from "../models/ContactType";

type MacPublicProfile = { URL: string; type: string };
type MacPhoneNumbers = { number: string; countryCode: string };

const mapRelevantLinkToPublicProfileContact = (
  publicProfiles: MacPublicProfile[] | undefined
): PublicProfileContact[] => {
  if (!publicProfiles) {
    return [];
  }
  return publicProfiles.map((c) => ({
    type: c.type as ContactType,
    url: c.URL,
  }));
};

const mapContactMailsToPublicProfileContact = (
  contactMails: string[] | undefined
): PublicProfileContact[] => {
  if (!contactMails) {
    return [];
  }
  return contactMails.map((c) => ({
    type: "mail",
    url: c,
  }));
};

const mapPhoneNumbersToPublicProfileContact = (
  phoneNumbers: MacPhoneNumbers[] | undefined
): PublicProfileContact[] => {
  if (!phoneNumbers) {
    return [];
  }
  return phoneNumbers.map((c) => ({
    type: "phone",
    url: `${c.countryCode}${c.number}`,
  }));
};

const mapToPublicProfileContacts = (
  contact: ContactMean | undefined
): PublicProfileContact[] => {
  if (!contact) {
    return [];
  }
  return [
    ...mapRelevantLinkToPublicProfileContact(
      contact.publicProfiles as MacPublicProfile[]
    ),
    ...mapContactMailsToPublicProfileContact(contact.contactMails as string[]),
    ...mapPhoneNumbersToPublicProfileContact(contact.phoneNumbers as MacPhoneNumbers[]),
  ];
};

const mapToPublicProfile = (mac: ManfredAwesomicCV): PublicProfile => ({
  name: mac.aboutMe.profile.name,
  surnames: mac.aboutMe.profile.surnames,
  avatarUrl: mac.aboutMe.profile?.avatar?.link as string,
  city: mac.aboutMe.profile.location?.municipality,
  description: mac.aboutMe.profile.description,
  title: mac.aboutMe.profile.title,
  contacts: mapToPublicProfileContacts(mac.careerPreferences?.contact),
});

const macFetcher = async (): Promise<PublicProfile> => {
  const manfredMacProfile = await fetcher<ManfredAwesomicCV>({
    endpoint: MANFRED_MAC_URL,
  });
  return mapToPublicProfile(manfredMacProfile);
};

export default macFetcher;
