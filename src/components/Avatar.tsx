import React from "react";
import { StyleSheet, Image, StyleProp, ImageStyle } from "react-native";

type AvatarProps = {
  avatarUrl: string;
  size?: "big" | "small";
  style?: StyleProp<ImageStyle>;
};

export default function Avatar({
  avatarUrl,
  size = "small",
  style,
}: AvatarProps) {
  return (
    <Image
      style={[
        styles.avatar,
        size === "big" ? styles.avatarBig : undefined,
        style,
      ]}
      source={{
        uri: avatarUrl,
      }}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 200,
  },
  avatarBig: {
    width: 250,
    height: 250,
  },
});
