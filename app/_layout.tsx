import {
  PaperProvider,
  MD3LightTheme,
  useTheme,
  Appbar,
} from "react-native-paper";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import Header from "./header";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const theme = {
  ...MD3LightTheme,
  custom: "property",
  colors: {
    ...MD3LightTheme.colors,
    brandPrimary: "#4F0E50",
    brandPrimaryDark: "#470D48",
    brandSecondary: "#BCC1D4",
    brandSecondaryDark1: "#A9AEBF",
    brandSecondaryDark2: "#848794",
    brandTertiary: "#20045A",
    brandTertiaryDark1: "#1D0451",
    brandTertiaryDark2: "#1A0348",
    brandTertiaryLight: "#361D6B",
    brandTertiaryLight1: "#BCB4CE",
    brandTertiaryLight2: "#D2CDDE",
    brandQuarterly: "#EDEDED",
    brandQuarterlyDark: "#E6E6E6",
    brandQuarterlyDark1: "#666666",
    brandQuarterlyDark2: "#4C4C4C",
    brandQuarterlyLight: "#EFEFEF",
    brandQuarterlyLight1: "#F6F6F6",
  },
  fonts: {
    ...MD3LightTheme.fonts,
    medium: {
      fontFamily: "Roboto-Medium",
      weight: "500",
    },
    bold: {
      fontFamily: "Work-Sans",
      weight: "700",
    },
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Work-Sans": require("../assets/fonts/WorkSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const _goBack = () => console.log("Went back");

  return (
    <PaperProvider theme={theme}>
      <Header />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
