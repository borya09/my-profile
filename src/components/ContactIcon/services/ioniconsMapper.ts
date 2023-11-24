import Ionicons from "@expo/vector-icons/Ionicons";
import { ContactType } from "../../../models/Contact";

export const mapToIonicons = (
  icon: ContactType
): typeof Ionicons.defaultProps => {
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
