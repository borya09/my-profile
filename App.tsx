import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import PublicProfile from "./src/screens/PublicProfile";
import { Theme } from "./src/styles/theme";
import { SpinnerProvider } from "./src/providers/SpinnerProvider";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    BigShouldersDisplay: require("./assets/fonts/BigShouldersDisplay-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SpinnerProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <PublicProfile />
      </View>
    </SpinnerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Theme.background,
  },
});
