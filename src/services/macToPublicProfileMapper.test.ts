import { describe, expect, test } from "@jest/globals";
import mapToPublicProfile from "./macToPublicProfileMapper";
import { ContactMean, ManfredAwesomicCV } from "../models/ManfredAwesomicCV";

const defaultMacFromManfred: ManfredAwesomicCV = {
  aboutMe: {
    profile: {
      name: "",
      surnames: "",
      location: {},
      title: "",
    },
  },
  settings: {
    language: "",
    lastUpdate: undefined,
    MACVersion: undefined,
  },
};

describe("mapToPublicProfile", () => {
  test("should map about me information", () => {
    const macFromManfred: ManfredAwesomicCV = {
      ...defaultMacFromManfred,
      aboutMe: {
        profile: {
          name: "John",
          surnames: "Doe",
          avatar: {
            link: "http://my-avatar.com/john",
          },
          location: {
            municipality: "Bilbao",
          },
          title: "Developer",
          description: "My bio",
        },
      },
    };

    const profile = mapToPublicProfile(macFromManfred);

    expect(profile.name).toBe("John");
    expect(profile.surnames).toBe("Doe");

    expect(profile.avatarUrl).toBe("http://my-avatar.com/john");
    expect(profile.city).toBe("Bilbao");

    expect(profile.title).toBe("Developer");
    expect(profile.description).toBe("My bio");
  });

  test("should map contacts", () => {
    const macFromManfred: ManfredAwesomicCV = {
      ...defaultMacFromManfred,
      careerPreferences: {
        contact: {
          publicProfiles: [
            {
              URL: "https://www.linkedin.com/in/johndoe/",
              type: "linkedin",
            },
            {
              URL: "https://github.com/johndoe",
              type: "github",
            },
          ],
          contactMails: ["johndoe@gmail.com"] as string[],
          phoneNumbers: [
            {
              number: "666999666",
              countryCode: "+34",
            },
          ],
        } as ContactMean,
      },
    };

    const profile = mapToPublicProfile(macFromManfred);

    expect(profile.contacts).toEqual([
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/johndoe/",
      },
      {
        type: "github",
        url: "https://github.com/johndoe",
      },
      {
        type: "mail",
        url: "johndoe@gmail.com",
      },
      {
        type: "phone",
        url: "+34666999666",
      },
    ]);
  });

  test("should map skills", () => {
    const macFromManfred: ManfredAwesomicCV = {
      ...defaultMacFromManfred,
      knowledge: {
        hardSkills: [
          {
            skill: {
              name: "Angular",
              type: "technology",
            },
          },
          {
            skill: {
              name: "React",
              type: "technology",
            },
          },
        ],
      },
    };

    const profile = mapToPublicProfile(macFromManfred);

    expect(profile.skills).toEqual(["Angular", "React"]);
  });

  test("should map experience", () => {
    const macFromManfred: ManfredAwesomicCV = {
      ...defaultMacFromManfred,
      experience: {
        jobs: [
          {
            organization: {
              name: "Company A",
            },
            roles: [
              {
                name: "Software developer",
                startDate: "2014-02-01",
                challenges: [
                  {
                    description: "Develop web and mobile applications",
                  },
                ],
              },
              {
                name: "Manager",
                startDate: "2014-02-01",
                challenges: [
                  {
                    description: "Manage development team",
                  },
                ],
              },
            ],
          },
          {
            organization: {
              name: "Company B",
            },
            roles: [
              {
                name: "Junio Software developer",
                startDate: "2012-02-01",
                finishDate: "2014-02-01",
                challenges: [
                  {
                    description: "Develop web applications",
                  },
                ],
              },
            ],
          },
        ],
      },
    };

    const profile = mapToPublicProfile(macFromManfred);

    expect(profile.jobs).toEqual([
      {
        company: "Company A",
        description: "Develop web and mobile applications",
        from: new Date("2014-02-01T00:00:00.000Z"),
        role: "Software developer",
        to: undefined,
      },
      {
        company: "Company A",
        description: "Manage development team",
        from: new Date("2014-02-01T00:00:00.000Z"),
        role: "Manager",
        to: undefined,
      },
      {
        company: "Company B",
        description: "Develop web applications",
        from: new Date("2012-02-01T00:00:00.000Z"),
        role: "Junio Software developer",
        to: new Date("2014-02-01T00:00:00.000Z"),
      },
    ]);
  });
});
