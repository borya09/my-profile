import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, TextStyle, View } from "react-native";
import Title from "../Title";

interface SectionProps {
  title: string;
  style?: StyleProp<TextStyle>;
}

export default function Section({
  title,
  children,
  style,
}: PropsWithChildren<SectionProps>) {
  return (
    <View style={[styles.container, style]}>
      <Title>{title}</Title>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
  },
});
