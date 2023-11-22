import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../../components/AppText";

type ProfileDescriptionProps = {
  description: string;
};

export default function ProfileDescription({
  description,
}: ProfileDescriptionProps) {
  return (
    <View style={styles.container}>
      <AppText>{description}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
