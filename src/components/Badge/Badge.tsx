import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

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
    borderRadius: globalStyles.borderRadius,
    backgroundColor: globalStyles.accent,
    color: globalStyles.accentContrast,
  },
});
