import React from "react";
import { StyleSheet, View } from "react-native";
import City from "../../../components/City";
import Avatar from "../../../components/Avatar";

type ProfileHeaderProps = {
  city: string | undefined;
  avatarUrl: string | undefined;
  name: string;
  surnames: string;
};

export default function PublicProfile({
  city,
  avatarUrl,
  name,
  surnames,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <Avatar
        avatarUrl={avatarUrl}
        name={name}
        surnames={surnames}
        style={styles.avatar}
      />
      {city && <City style={styles.background} city={city} blurRadius={2.5} />}
      {!city && <View style={[styles.background, styles.fallback]} />}
    </View>
  );
}

const translateY = 70;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 240,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: translateY,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  fallback: {
    backgroundColor: "#6C48EF",
  },
  avatar: {
    position: "relative",
    zIndex: 2,
    transform: [{ translateY }],
  },
});
