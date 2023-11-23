import { Contact, ContactType } from "../models/Contact";
import { Job } from "../models/Job";
import {
  Competence,
  ContactMean,
  ManfredAwesomicCV,
  OrganizationType,
  PublicEntityDetails,
  Role,
} from "../models/ManfredAwesomicCV";
import { PublicProfile } from "../models/PublicProfile";

type MacPublicProfile = { URL: string; type: string };
type MacPhoneNumbers = { number: string; countryCode: string };
type MacHardSkill = {
  skill?: Competence;
  level?: "basic" | "intermediate" | "high" | "expert";
};
type MacJob = {
  organization: PublicEntityDetails;
  type?: OrganizationType;
  roles: Role[];
};

const mapRelevantLinkToPublicProfileContact = (
  publicProfiles: MacPublicProfile[] | undefined
): Contact[] => {
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
): Contact[] => {
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
): Contact[] => {
  if (!phoneNumbers) {
    return [];
  }
  return phoneNumbers.map((c) => ({
    type: "phone",
    url: `${c.countryCode}${c.number}`,
  }));
};

const mapToContacts = (contact: ContactMean | undefined): Contact[] => {
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

const mapToSkills = (hardSkills: MacHardSkill[] | undefined): string[] => {
  if (!hardSkills) {
    return [];
  }
  return hardSkills.map((s) => s.skill?.name).filter((s): s is string => !!s);
};

const mapToJobs = (jobs: MacJob[] | undefined): Job[] => {
  if (!jobs) {
    return [];
  }
  return jobs.reduce((all, j) => {
    const roles = j.roles.map((r) => ({
      company: j.organization.name,
      description: r.challenges ? r.challenges[0].description : undefined,
      role: r.name,
      from: new Date(r.startDate),
      to: r.finishDate ? new Date(r.finishDate) : undefined,
    }));
    return [...all, ...roles];
  }, [] as Job[]);
};

const mapToPublicProfile = (mac: ManfredAwesomicCV): PublicProfile => ({
  name: mac.aboutMe.profile.name,
  surnames: mac.aboutMe.profile.surnames,
  avatarUrl: mac.aboutMe.profile?.avatar?.link as string,
  city: mac.aboutMe.profile.location?.municipality,
  description: mac.aboutMe.profile.description,
  title: mac.aboutMe.profile.title,
  contacts: mapToContacts(mac.careerPreferences?.contact),
  skills: mapToSkills(mac.knowledge?.hardSkills),
  jobs: mapToJobs(mac.experience?.jobs),
});

export default mapToPublicProfile;
