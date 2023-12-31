import React from "react";
import { StyleSheet, Image, ViewStyle, StyleProp, View } from "react-native";
import useFetchCityUrl from "./hooks/useFetchCityUrl";
import { Theme } from "../../styles/theme";

type CityProps = {
  city: string;
  blurRadius?: number;
  style?: StyleProp<ViewStyle>;
};

export default function City({ city, blurRadius, style }: CityProps) {
  const { url } = useFetchCityUrl(city);

  if (!url) return;

  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.city}
        blurRadius={blurRadius}
        source={{
          uri: url,
        }}
      />
      <View style={styles.overlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: Theme.accent,
    opacity: 0.3,
  },
  city: {
    width: "100%",
    height: "100%",
  },
});
