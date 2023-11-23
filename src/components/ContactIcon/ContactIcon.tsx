import React, { useCallback } from "react";
import { Linking, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalStyles } from "../../styles/globalStyles";
import { ContactType } from "../../models/ContactType";

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
  const open = useCallback(() => {
    Linking.openURL(url);
  }, [url]);

  return (
    <Pressable  onPress={open}>
      <Ionicons
        name={mapToIonicons(icon)}
        size={24}
        color={globalStyles.accent}
      />
    </Pressable >
  );
}
