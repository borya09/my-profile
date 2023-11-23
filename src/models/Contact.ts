export type ContactType =
  | "linkedin"
  | "stackoverflow"
  | "twitter"
  | "github"
  | "website"
  | "mail"
  | "phone"
  | "other";

export interface Contact {
  type: ContactType;
  url: string;
}
