import React from "react";
import { Linking, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Theme } from "../../styles/theme";
import { ContactType } from "../../models/Contact";

const mapToIonicons = (icon: ContactType): typeof Ionicons.defaultProps => {
  switch (icon) {
    case "linkedin":
      return "logo-linkedin";
    case "stackoverflow":
      return "logo-stackoverflow";
    case "twitter":
      return "logo-twitter";
    case "github":
      return "logo-github";
    case "website":
      return "browsers";
    case "mail":
      return "mail";
    case "phone":
      return "call";
    default:
      return "information-circle";
  }
};

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
