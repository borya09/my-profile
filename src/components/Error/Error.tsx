import React, { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

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
    backgroundColor: globalStyles.error,
    borderRadius: globalStyles.borderRadius,
    fontSize: 18,
  },
});
