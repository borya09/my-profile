import {
  Competence,
  ContactMean,
  ManfredAwesomicCV,
} from "../models/ManfredAwesomicCV";
import { PublicProfile, PublicProfileContact } from "../models/PublicProfile";
import { ContactType } from "../models/ContactType";

type MacPublicProfile = { URL: string; type: string };
type MacPhoneNumbers = { number: string; countryCode: string };
type HardSkill = {
  skill?: Competence;
  level?: "basic" | "intermediate" | "high" | "expert";
};

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
    ...mapPhoneNumbersToPublicProfileContact(
      contact.phoneNumbers as MacPhoneNumbers[]
    ),
  ];
};

const mapToPublicProfileSkills = (
  hardSkills: HardSkill[] | undefined
): string[] => {
  if (!hardSkills) {
    return [];
  }
  return hardSkills.map((s) => s.skill?.name).filter((s): s is string => !!s);
};

const mapToPublicProfile = (mac: ManfredAwesomicCV): PublicProfile => ({
  name: mac.aboutMe.profile.name,
  surnames: mac.aboutMe.profile.surnames,
  avatarUrl: mac.aboutMe.profile?.avatar?.link as string,
  city: mac.aboutMe.profile.location?.municipality,
  description: mac.aboutMe.profile.description,
  title: mac.aboutMe.profile.title,
  contacts: mapToPublicProfileContacts(mac.careerPreferences?.contact),
  skills: mapToPublicProfileSkills(mac.knowledge?.hardSkills),
});

export default mapToPublicProfile;
