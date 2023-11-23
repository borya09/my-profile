import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/Text";
import ContactIcon from "../../../components/ContactIcon";
import { Contact } from "../../../models/Contact";

type PublicProfileClaimProps = {
  name: string;
  surnames: string;
  title: string;
  contacts: Contact[];
};

export default function PublicProfileClaim({
  name,
  surnames,
  title,
  contacts,
}: PublicProfileClaimProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name} {surnames}
      </Text>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.contacts}>
        {contacts.map((c) => (
          <ContactIcon icon={c.type} url={c.url} key={c.url} />
        ))}
      </View>
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
    fontSize: 36,
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
  },
  contacts: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 35,
    gap: 12,
  },
});
