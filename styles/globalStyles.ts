import { StyleSheet } from "react-native";
import { AppTheme, useAppTheme } from "@/app/_layout";

export const useGlobalStyles = () => {
  const theme: AppTheme = useAppTheme();

  return StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "flex-start",
    },
    title: {
      fontSize: 20,
      marginTop: 16,
      color: theme.colors.brandQuarterlyDark2,
      fontFamily: "Work-Sans",
    },
    subtitle: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 8,
      fontFamily: "Work-Sans",
    },
    text: {
      fontSize: 16,
      marginBottom: 12,
      fontFamily: "Roboto-Medium",
    },
    divider: {
      marginTop: 8,
      marginBottom: 16,
      borderWidth: 0.5,
      borderColor: theme.colors.brandQuarterlyDark2,
    },
    primaryButton: {
      justifyContent: "center",
      height: 48,
      display: "flex",
      borderRadius: 5,
      backgroundColor: theme.colors.brandTertiary,
      alignSelf: "stretch",
      alignItems: "center",
    },
    primaryButtonLabel: {
      fontSize: 18,
      fontFamily: "Roboto-Medium",
    },
    tertiaryButton: {
      justifyContent: "center",
      height: 48,
      display: "flex",
      borderRadius: 5,
      backgroundColor: theme.colors.brandQuarterlyLight,
      alignSelf: "stretch",
      alignItems: "center",
    },
    tertiaryButtonLabel: {
      fontSize: 18,
      color: theme.colors.brandPrimary,
      fontFamily: "Roboto-Medium",
    },
    radioButton: {
      paddingTop: 12,
      gap: 6,
      flexDirection: "row",
      alignItems: "center",
    },
    radioButtonLabel: {
      fontSize: 16,
      marginBottom: 12,
      fontFamily: "Roboto-Medium",
    },
  });
};
