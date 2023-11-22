import React from "react";
import { View, StyleSheet } from "react-native";
import PublicProfile from "./src/screens/PublicProfile/PublicProfile";
import { globalStyles } from "./src/styles/globalStyles";
import { SpinnerProvider } from "./src/providers/SpinnerProvider";

export default function App() {
  return (
    <View style={styles.container}>
      <SpinnerProvider>
        <PublicProfile />
      </SpinnerProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: globalStyles.background,
  },
});
