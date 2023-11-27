import React from "react";
import { StyleProp, StyleSheet, ViewStyle, View } from "react-native";
import { Job } from "../../models/Job";
import Text from "../../components/Text";

interface JobCardProps {
  job: Job;
  style?: StyleProp<ViewStyle>;
}

export default function JobCard({ job, style }: JobCardProps) {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("en-GB").format(date);

  return (
    <View style={style}>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.role}>{job.role}</Text>
      <Text style={styles.dates}>
        {formatDate(job.from)} - {job.to ? formatDate(job.to) : "now"}
      </Text>
      <Text>{job.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  company: {
    fontSize: 22,
    fontWeight: "bold",
  },
  role: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  dates: {
    marginBottom: 10,
    fontSize: 12,
    fontStyle: "italic",
  },
});
