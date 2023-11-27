import React from "react";
import { StyleSheet, View } from "react-native";
import Section from "../../../components/Section";
import Badge from "../../../components/Badge";

type PublicProfileSkillsProps = {
  skills: string[];
};

export default function PublicProfileSkills({
  skills,
}: PublicProfileSkillsProps) {
  return (
    <Section title="Skills">
      <View style={styles.container}>
        {skills.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
