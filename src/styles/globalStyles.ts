import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

interface ColorSchemeTheme {
  background: string;
  color: string;
}

const DarkTheme: ColorSchemeTheme = {
  background: "#121212",
  color: "#fff",
};

const LightTheme: ColorSchemeTheme = {
  background: "#fff",
  color: "#121212",
};

export const globalStyles = {
  ...(colorScheme === "dark" ? DarkTheme : LightTheme),
};
