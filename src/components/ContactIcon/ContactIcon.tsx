import React from "react";
import { Linking, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Theme } from "../../styles/theme";
import { ContactType } from "../../models/Contact";
import { mapToIonicons } from "./services/ioniconsMapper";

type ContactIconProps = {
  icon: ContactType;
  url: string;
};

export default function ContactIcon({ icon, url }: ContactIconProps) {
  return (
    <Pressable onPress={() => Linking.openURL(url)}>
      <Ionicons
        name={mapToIonicons(icon)}
        size={24}
        color={Theme.accent}
      />
    </Pressable>
  );
}
