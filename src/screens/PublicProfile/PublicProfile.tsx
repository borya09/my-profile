import React from "react";
import {
  ActivityIndicator,
  Appearance,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Avatar from "../../components/Avatar";
import City from "../../components/City";
import { globalStyles } from "../../styles/globalStyles";
import ProfileDescription from "./components/PublicProfileDescription";
import ProfileHeader from "./components/PublicProfileHeader";
import useFetchPublicProfile from "./hooks/useFetchPublicProfile";

const colorScheme = Appearance.getColorScheme();

export default function PublicProfile() {
  const { publicProfile, loading, error } = useFetchPublicProfile();

  if (loading) return <ActivityIndicator size="large" />;
  if (error || !publicProfile) return "error while loading public profile";

  return (
    <ScrollView>
      <View style={styles.container}>
        {publicProfile.city && (
          <City city={publicProfile.city} blurRadius={3} style={styles.city} />
        )}
        <View
          style={[
            styles.content,
            publicProfile.city ? styles.contentWithCity : undefined,
          ]}
        >
          {publicProfile.avatarUrl && (
            <Avatar
              avatarUrl={publicProfile.avatarUrl}
              size="big"
              style={[styles.avatar]}
            />
          )}
          <ProfileHeader {...publicProfile} />
          {publicProfile.description && (
            <ProfileDescription description={publicProfile.description} />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor:
      colorScheme === "dark"
        ? globalStyles.Dark.Background
        : globalStyles.Light.Background,
  },
  city: {
    height: 300,
    zIndex: 1,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    padding: 20,
  },
  contentWithCity: {
    transform: [{ translateY: -200 }],
  },
  avatar: {
    marginTop: 20,
    marginBottom: 20,
  },
});
