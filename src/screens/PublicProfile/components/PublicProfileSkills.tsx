import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/Text";
import Section from "../../../components/Section";
import { globalStyles } from "../../../styles/globalStyles";

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
          <Text key={s} style={styles.skill}>
            {s}
          </Text>
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
  skill: {
    backgroundColor: globalStyles.accent,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});
