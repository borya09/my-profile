import React from "react";
import { View } from "react-native";
import Text from "../../../components/Text";
import Title from "../../../components/Title";

type ProfileDescriptionProps = {
  description: string;
};

export default function ProfileDescription({
  description,
}: ProfileDescriptionProps) {
  return (
    <View>
      <Title>Introduction</Title>
      <Text>{description}</Text>
    </View>
  );
}
