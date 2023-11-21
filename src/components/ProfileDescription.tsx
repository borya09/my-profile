import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ProfileDescriptionProps = {
  description: string;
};

export default function ProfileDescription({
  description,
}: ProfileDescriptionProps) {
  return (
    <View style={styles.container}>
      <Text>{description}</Text>
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
