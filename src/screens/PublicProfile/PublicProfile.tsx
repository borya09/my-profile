import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ProfileDescription from "./components/PublicProfileDescription";
import ProfileHeader from "./components/PublicProfileHeader";
import useFetchPublicProfile from "./hooks/useFetchPublicProfile";
import PublicProfileClaim from "./components/PublicProfileClaim";
import Error from "../../components/Error";

export default function PublicProfile() {
  const { publicProfile, error } = useFetchPublicProfile();

  if (error || !publicProfile) return <Error>Error while loading public profile</Error>;

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
        />
        {publicProfile.description && (
          <ProfileDescription description={publicProfile.description} />
        )}       
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
