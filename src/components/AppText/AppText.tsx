import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

interface AppTextProps {
  style?: StyleProp<TextStyle>;
}

export default function AppText({ children, style }: PropsWithChildren<AppTextProps>) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: globalStyles.color,
  },
});
