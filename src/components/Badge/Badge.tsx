import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { Theme } from "../../styles/theme";

interface BadgeProps {
  style?: StyleProp<TextStyle>;
}

export default function Badge({
  children,
  style,
}: PropsWithChildren<BadgeProps>) {
  return <Text style={[styles.badge, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: Theme.borderRadius,
    backgroundColor: Theme.accent,
    color: Theme.accentContrast,
  },
});
