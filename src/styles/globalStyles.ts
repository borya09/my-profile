import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

interface ColorSchemeTheme {
  accent: string;
  accentContrast: string;
  background: string;
  color: string;
  error: string;
}

const DarkTheme: ColorSchemeTheme = {
  accent: "#6C48EF",
  accentContrast: "#FFF",
  background: "#121212",
  color: "#FFF",
  error: "#CE392F",
};

const LightTheme: ColorSchemeTheme = {
  accent: "#6C48EF",
  accentContrast: "#FFF",
  background: "#FFF",
  color: "#121212",
  error: "#CE392F",
};

export const globalStyles = {
  ...(colorScheme === "dark" ? DarkTheme : LightTheme),
  borderRadius: 4,
};
