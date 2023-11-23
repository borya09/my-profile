import React from "react";
import Text from "../../../components/Text";
import Section from "../../../components/Section";

type ProfileDescriptionProps = {
  description: string;
};

export default function ProfileDescription({
  description,
}: ProfileDescriptionProps) {
  return (
    <Section title="Introduction">
      <Text>{description}</Text>
    </Section>
  );
}
