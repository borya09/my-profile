import React from "react";
import {
  StyleSheet,
  Image,
  StyleProp,
  ImageStyle,
  View,
  Text,
} from "react-native";
import { globalStyles } from "../../styles/globalStyles";

type AvatarProps = {
  name: string;
  surnames: string;
  avatarUrl: string | undefined;
  style?: StyleProp<ImageStyle>;
};

export default function Avatar({
  name,
  surnames,
  avatarUrl,
  style,
}: AvatarProps) {
  return (
    <View style={[styles.avatar, style]}>
      <Text style={styles.initials}>
        {name[0]}
        {surnames[0]}
      </Text>
      {avatarUrl && (
        <Image
          style={styles.image}
          source={{
            uri: avatarUrl,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: 250,
    height: 250,
    borderRadius: 200,
    borderColor: globalStyles.background,
    borderWidth: 8,
    backgroundColor: "#FFD601",
    overflow: "hidden",
  },
  initials: {
    fontWeight: "bold",
    fontSize: 130,
    textAlign: "center",
    color: "#000",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 250,
    height: 250,
  },
});
