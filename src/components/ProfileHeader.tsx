import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

type ProfileHeaderProps = {
  name: string;
  surnames: string[];
  avatarUrl: string | undefined;
  city: string | undefined;
};

export default function PublicProfile({
  name,
  surnames,
  avatarUrl,
  city
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <Text>
        {name} {surnames.join(" ")}
      </Text>
      {avatarUrl && (
        <Image
          style={styles.avatar}
          source={{
            uri: avatarUrl,
          }}
        />
      )}
      {city && (
        <Text>
          {city}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 66,
    height: 58,
  },
});
