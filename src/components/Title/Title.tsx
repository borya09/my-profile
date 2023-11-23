import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

interface TitleProps {
  style?: StyleProp<TextStyle>;
}

export default function Title({
  children,
  style,
}: PropsWithChildren<TitleProps>) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: globalStyles.color,
    fontSize: 25,
    textTransform: "uppercase",    
    fontFamily: "BigShouldersDisplay",
    marginVertical: 10,
  },
});
