import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

interface ColorSchemeTheme {
  background: string;
  color: string;
  error: string;
}

const DarkTheme: ColorSchemeTheme = {
  background: "#121212",
  color: "#FFF",
  error: "#CE392F",
};

const LightTheme: ColorSchemeTheme = {
  background: "#FFF",
  color: "#121212",
  error: "#CE392F",
};

export const globalStyles = {
  ...(colorScheme === "dark" ? DarkTheme : LightTheme),
};
