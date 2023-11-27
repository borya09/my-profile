import React from "react";
import { ActivityIndicator, StyleProp, ViewStyle, StyleSheet, View } from "react-native";

interface SpinnerProps {
  style?: StyleProp<ViewStyle>;
}

export default function Spinner({ style }: SpinnerProps) {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="large" />
      <View style={styles.overlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    opacity: 0.8,
  },
});
