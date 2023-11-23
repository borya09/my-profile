import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ProfileDescription from "./components/PublicProfileDescription";
import ProfileHeader from "./components/PublicProfileHeader";
import useFetchPublicProfile from "./hooks/useFetchPublicProfile";
import PublicProfileClaim from "./components/PublicProfileClaim";
import Error from "../../components/Error";
import PublicProfileSkills from "./components/PublicProfileSkills";
import PublicProfileExperience from "./components/PublicProfileJobs";

export default function PublicProfile() {
  const { publicProfile, error } = useFetchPublicProfile();

  if (error) return <Error>Error while loading public profile</Error>;

  if (!publicProfile) return;

  return (
    <ScrollView>
      <ProfileHeader
        avatarUrl={publicProfile.avatarUrl}
        city={publicProfile.city}
        name={publicProfile.name}
        surnames={publicProfile.surnames}
      />
      <View style={styles.content}>
        <PublicProfileClaim
          name={publicProfile.name}
          surnames={publicProfile.surnames}
          title={publicProfile.title}
          contacts={publicProfile.contacts}
        />
        {publicProfile.description && (
          <ProfileDescription description={publicProfile.description} />
        )}
        {publicProfile.skills.length && (
          <PublicProfileSkills skills={publicProfile.skills} />
        )}
        {publicProfile.jobs.length && (
          <PublicProfileExperience jobs={publicProfile.jobs} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
