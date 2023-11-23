import { Contact } from "./Contact";
import { Job } from "./Job";

export interface PublicProfile {
  name: string;
  surnames: string;
  avatarUrl: string | undefined;
  city: string | undefined;
  title: string;
  description: string | undefined;
  contacts: Contact[];
  skills: string[];
  jobs: Job[];
}
