import React from "react";
import { StyleSheet, View, StyleProp, ImageStyle, Text } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Animated, {
  withSpring,
  useSharedValue,
  withDelay,
} from "react-native-reanimated";

type AvatarProps = {
  name: string;
  surnames: string;
  avatarUrl: string | undefined;
  style?: StyleProp<ImageStyle>;
};

const size: number = 250;
const avatarDelayMs: number = 1500;
const avatarAnimationMs: number = 5000;

export default function Avatar({
  name,
  surnames,
  avatarUrl,
  style,
}: AvatarProps) {
  const animatedSize = useSharedValue(0);

  const avatarLoaded = () => {
    animatedSize.value = withDelay(
      avatarDelayMs,
      withSpring(animatedSize.value + size, { duration: avatarAnimationMs })
    );
  };

  return (
    <View style={[styles.avatar, style]}>
      <Text style={styles.initials}>
        {name[0]}
        {surnames[0]}
      </Text>
      {avatarUrl && (
        <Animated.Image
          style={{ ...styles.image, width: animatedSize, height: animatedSize }}
          onLoad={avatarLoaded}
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
    width: size,
    height: size,
    borderRadius: size / 2,
    borderColor: globalStyles.background,
    borderWidth: 8,
    backgroundColor: globalStyles.accent,
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
    borderRadius: size / 2,
  },
});
