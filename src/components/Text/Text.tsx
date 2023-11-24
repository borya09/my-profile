import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text as RNText, TextStyle } from "react-native";
import { Theme } from "../../styles/theme";

interface TextProps {
  style?: StyleProp<TextStyle>;
}

export default function Text({ children, style }: PropsWithChildren<TextProps>) {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
}

const styles = StyleSheet.create({
  text: {
    color: Theme.color,
  },
});
