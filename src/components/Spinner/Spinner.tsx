import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Spinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" style={styles.spinner} />
      <View style={styles.overlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  },
  spinner: {
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    opacity: 0.8,
    zIndex: 2,
  },
});
