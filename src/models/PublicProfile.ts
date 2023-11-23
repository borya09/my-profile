import { ContactType } from "./ContactType";

export interface PublicProfileContact {
  type: ContactType;
  url: string;
}

export interface PublicProfile {
  name: string;
  surnames: string;
  avatarUrl: string | undefined;
  city: string | undefined;
  title: string;
  description: string | undefined;
  contacts: PublicProfileContact[];
  skills: string[];
}
