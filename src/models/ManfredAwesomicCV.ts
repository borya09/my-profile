/**
 * picture, thumbnail or avatar
 */
export type Image =
  | {
      link: string;
      [k: string]: unknown;
    }
  | {
      data: string;
      mediaType: "image/png" | "image/jpeg";
      encoding: "base64";
      [k: string]: unknown;
    };
/**
 * A way to contact a specific person
 */
export type ContactMean =
  | {
      /**
       * Online services that provide a way to contact a person without exposing mail or phone number.
       */
      publicProfiles: [
        {
          type:
            | "manfred"
            | "linkedin"
            | "stackoverflow"
            | "xing"
            | "twitter"
            | "github"
            | "website"
            | "other";
          URL: string;
        },
        ...{
          type:
            | "manfred"
            | "linkedin"
            | "stackoverflow"
            | "xing"
            | "twitter"
            | "github"
            | "website"
            | "other";
          URL: string;
        }[]
      ];
      [k: string]: unknown;
    }
  | {
      phoneNumbers: [
        {
          /**
           * Country calling code as defined in International Telecommunication Union (ITU) standards E.123 and E.164.
           */
          countryCode: number;
          number: string;
        },
        ...{
          /**
           * Country calling code as defined in International Telecommunication Union (ITU) standards E.123 and E.164.
           */
          countryCode: number;
          number: string;
        }[]
      ];
      [k: string]: unknown;
    }
  | {
      contactMails: [string, ...string[]];
      [k: string]: unknown;
    };
/**
 * Types of Recommendations
 */
export type RecommendationType =
  | "reading"
  | "video"
  | "podcast"
  | "web"
  | "other";
/**
 * Types of Organization
 */
export type OrganizationType =
  | "freelance"
  | "publicAdministration"
  | "NGO"
  | "startup"
  | "SME"
  | "bigCorp"
  | "academicalInstitution"
  | "other";
/**
 * Types of Projects
 */
export type ProjectType =
  | "proBono"
  | "openSource"
  | "sideProject"
  | "personalAchievement"
  | "other";
/**
 * Types of Public Artifacts
 */
export type PublicArtifactType =
  | "post"
  | "talk"
  | "sideProject"
  | "achievement"
  | "launch"
  | "video";
/**
 * A list of tags with random values to provide the candidates a way to segment and categorize elements in their CV.
 */
export type Tags = string[];
/**
 * Types of studies:
 *
 * * "officialDegree" is a degree accredited by the government (University Degree) or an external, recognized and independent agency (some MBAs).
 * * "certification" is a degree accredited by a private institution (eg. Oracle Database Admin Certification or Projecr Management Institute PMP)
 * * "unaccredited" is a course without any accreditation (eg. Coursera or Platzi courses), but this doesn't mean that is not valid, legit, or has poor quality
 * * "selfTraining" is the study designed, managed and evaluated just by the own learner.
 */
export type StudyType =
  | "officialDegree"
  | "certification"
  | "unaccredited"
  | "selfTraining";
/**
 * Types of Contracts
 */
export type ContractType =
  | "permanent"
  | "temporary"
  | "freelance"
  | "internship";

/**
 * An open CV format
 */
export interface ManfredAwesomicCV {
  /**
   * CV Settings
   */
  settings: {
    /**
     * The language of the CV expressed as a [ISO 639-1 code](https://en.wikipedia.org/wiki/ISO_639-1)
     */
    language: string;
    /**
     * Last time the CV was updated
     */
    lastUpdate?: string;
    /**
     * Schema version which validated the JSON
     */
    MACVersion?: string;
  };
  /**
   * Main data of the CV author
   */
  aboutMe: {
    profile: Person;
    /**
     * Relevant years of experience related with desired professional roles and goals.
     */
    relevantYearsOfExperience?: number;
    relevantLinks?: {
      type:
        | "manfred"
        | "linkedin"
        | "stackoverflow"
        | "xing"
        | "twitter"
        | "github"
        | "website"
        | "other";
      URL: string;
      description?: string;
    }[];
    /**
     * Friends or colleagues with whom I have worked or not, whose relationship with me can help define me as a professional.
     */
    significativeRelationships?: Person[];
    /**
     * Facts that define you: your IDE, your favorite books,  your football team...
     */
    interestingFacts?: {
      topic?: string;
      fact: string;
    }[];
    currentSalary?: {
      currency: string;
      amount: number;
      relevantPerks?: string[];
    };
    noticePeriod?: number;
    /**
     * Content I like and recommend that can help define me as a professional.
     */
    recommendations?: {
      title: string;
      type?: RecommendationType;
      URL?: string;
      authors?: Person[];
      summary?: string;
    }[];
  };
  experience?: {
    jobs?: {
      organization: PublicEntityDetails;
      type?: OrganizationType;
      roles: [Role, ...Role[]];
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  } & {
    projects?: {
      details?: PublicEntityDetails;
      type?: ProjectType;
      roles: Role[];
    }[];
    [k: string]: unknown;
  } & {
    publicArtifacts?: {
      details: PublicEntityDetails;
      type?: PublicArtifactType;
      publishingDate?: string;
      relatedCompetences?: Competence[];
      tags?: Tags;
    }[];
    [k: string]: unknown;
  };
  knowledge?: {
    languages?: {
      /**
       * A language expressed as a [ISO 639-1 code](https://en.wikipedia.org/wiki/ISO_639-1)
       */
      name: string;
      fullName?: string;
      level?:
        | "Elementary proficiency"
        | "Limited working proficiency"
        | "Professional working proficiency"
        | "Full professional proficiency"
        | "Native or bilingual proficiency";
    }[];
    /**
     * hardSkills are a subset of competence types (tool, technology or hardware).
     */
    hardSkills?: {
      skill?: Competence;
      level?: "basic" | "intermediate" | "high" | "expert";
    }[];
    /**
     * softSkills are a subset of competence types (practice or domain)
     */
    softSkills?: {
      skill?: Competence;
      level?: "basic" | "intermediate" | "high" | "expert";
    }[];
    studies?: {
      studyType: StudyType;
      /**
       * If studies finished achieving the linked degree
       */
      degreeAchieved: boolean;
      name: string;
      description?: string;
      /**
       * date when studies started in format yyyy-mm-dd
       */
      startDate: string;
      /**
       * date when studies finished (if finished), with or without obtaining a degree, in format yyyy-mm-dd
       */
      finishDate?: string;
      institution?: PublicEntityDetails;
      linkedCompetences?: Competence[];
    }[];
  };
  careerPreferences?: {
    contact?: ContactMean;
    status?: "openToOffers" | "searchingActively" | "notAvailable";
    requirements?: {
      compensation?: {
        salary: {
          currency: string;
          from: number;
          upto?: number;
          comments?: string;
        };
        equity?: {
          /**
           * If equity is a must have to accept a new position
           */
          mustHave: boolean;
          from: number;
          upto?: number;
          comments?: string;
        };
        perks?: {
          /**
           * Perks a new position must have to be considered
           */
          mustHave?: string[];
          [k: string]: unknown;
        } & {
          /**
           * Perks a new position should have to be considered
           */
          niceToHave?: string[];
          [k: string]: unknown;
        };
      };
      contractTypes?: ContractType[];
      location?: {
        remoteOnly?: boolean;
        openToRelocate?: boolean;
        openToRemote?: boolean;
        workingAreas?: {
          location?: Location;
          distanceFromMunicipality?: {
            /**
             * Unit of measure, Kilometers or Miles
             */
            unit: "Km" | "Mi";
            amount: number;
          };
        }[];
        comments?: string;
      };
    };
    preferences?: {
      /**
       * Skills, tools, domains or methodologies I like to work with
       */
      preferredCompetences?: Competence[];
      /**
       * Skills, tools, domains or methodologies I don't like to work with
       */
      discardedCompetences?: Competence[];
      /**
       * Type of organizations where I want to work
       */
      preferredOrganizations?: OrganizationType[];
      /**
       * Type of organizations where I don't want to work
       */
      discardedOrganizations?: OrganizationType[];
      preferredRoles?: string[];
      /**
       * Type of roles I don't like to adopt
       */
      discardedRoles?: string[];
    };
    /**
     * Personal and Professional goals to match with company needs and requirements.
     */
    goals?: {
      title?: string;
      description?: string;
    }[];
  };
  [k: string]: unknown;
}
/**
 * A Person data
 */
export interface Person {
  name: string;
  /**
   * Surname o Surnames of the person
   */
  surnames: string;
  /**
   * Role, relationship or activity related to the person.
   */
  title: string;
  description?: string;
  /**
   * Person's birth date in format yyyy-mm-dd
   */
  birthday?: string;
  avatar?: Image;
  contact?: ContactMean;
  location?: Location;
}
export interface Location {
  /**
   * Country where you live
   */
  country?: string;
  /**
   * Region (State, Länder, County, Community...) where you live.
   */
  region?: string;
  /**
   * City or town where you live.
   */
  municipality?: string;
  postalCode?: string;
  address?: string;
  notes?: string;
}
/**
 * Organization, Company, Institution, Administration, Project or Initiative related to my career.
 */
export interface PublicEntityDetails {
  name: string;
  description?: string;
  URL?: string;
  image?: Image;
  location?: Location;
  [k: string]: unknown;
}
/**
 * roles developed within an organization
 */
export interface Role {
  name: string;
  startDate: string;
  finishDate?: string;
  challenges?: {
    description: string;
    actions?: string[];
  }[];
  competences?: Competence[];
  referrals?: Person[];
  /**
   * Notes and information about the role
   */
  notes?: string;
}
/**
 * Any competence used to complete professional tasks (tools proficiency as "Excel", technologies mastered as "JAVA", practices learned as "TDD", hardware you know how to handle as vehicles or construction tools, and know-how domains as "banking" or "russia")
 */
export interface Competence {
  name: string;
  type: "tool" | "technology" | "practice" | "hardware" | "domain";
  description?: string;
}
