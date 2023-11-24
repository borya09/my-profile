import React, { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { Theme } from "../../styles/theme";

export default function Error({ children }: PropsWithChildren) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    marginHorizontal: 20,
    textAlign: "center",
    padding: 10,
    color: "#f4c7c7",
    backgroundColor: Theme.error,
    borderRadius: Theme.borderRadius,
    fontSize: 18,
  },
});
