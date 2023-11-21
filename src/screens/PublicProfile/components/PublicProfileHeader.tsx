import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ProfileHeaderProps = {
  name: string;
  surnames: string[];
  city: string | undefined;
};

export default function PublicProfile({
  name,
  surnames,
  city,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>     
      <Text>
        {name} {surnames.join(" ")}
      </Text>
      {city && <Text>{city}</Text>}
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
});
