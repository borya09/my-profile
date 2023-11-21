import React from "react";
import { StyleSheet, Image, ImageStyle, StyleProp, View } from "react-native";
import useFetchCityUrl from "../hooks/useFetchCityUrl";
import { globalStyles } from "../styles/globalStyles";

type CityProps = {
  city: string;
  blurRadius?: number;
  style?: StyleProp<ImageStyle>;
};

export default function City({ city, blurRadius, style }: CityProps) {
  const { url } = useFetchCityUrl(city);

  return (
    <View style={styles.container}>
      <Image
        style={[styles.city, style]}
        blurRadius={blurRadius}
        source={{
          uri: url,
        }}
      />
      <View style={styles.overlay}></View>
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
    backgroundColor: globalStyles.Dark.Background,
    opacity: 0.3,
    zIndex: 1,
  },
  city: {
    width: "100%",
  },
});
