import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../../components/AppText";

type PublicProfileClaimProps = {
  name: string;
  surnames: string;
  title: string;
};

export default function PublicProfileClaim({
  name,
  surnames,
  title,
}: PublicProfileClaimProps) {
  return (
    <View style={styles.container}>
      <AppText style={styles.name}>
        {name} {surnames}
      </AppText>
      <AppText style={styles.title}>
        {title}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  name: {   
    fontSize: 40,
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",    
  },
});
