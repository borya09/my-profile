import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Section from "../../../components/Section";
import { Job } from "../../../models/Job";
import JobCard from "../../../components/JobCard";

type PublicProfileExperienceProps = {
  jobs: Job[];
};

const Gap = 20;

export default function PublicProfileExperience({
  jobs,
}: PublicProfileExperienceProps) {
  return (
    <Section title="Jobs">
      <View>
        <FlatList
          data={jobs}
          scrollEnabled={false}
          renderItem={({ item }) => <JobCard job={item} />}
          keyExtractor={(j) => j.company + j.role}
          contentContainerStyle={{ gap: Gap }}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
        />
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  separator: {
    alignSelf: "center",
    marginTop: Gap,
    backgroundColor: "#C8C8C8",
    height: 1,
    width: 80,
  },
});
