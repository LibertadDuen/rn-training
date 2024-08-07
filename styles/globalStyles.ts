import { StyleSheet } from "react-native";
import { AppTheme, useAppTheme } from "@/app/_layout";

export const useGlobalStyles = () => {
  const theme: AppTheme = useAppTheme();

  return StyleSheet.create({
    screenContainer: {
      flex: 1,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: "700",
      color: theme.colors.brandQuarterlyDark2,
      marginTop: 16,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 8,
    },
    text: {
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 12,
    },
    divider: {
      borderColor: theme.colors.brandQuarterlyDark2,
      borderWidth: 0.5,
      marginTop: 8,
      marginBottom: 16,
    },
    primaryButton: {
      display: "flex",
      backgroundColor: theme.colors.brandTertiary,
      height: 48,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    primaryButtonLabel: {
      fontSize: 18,
    },
  });
};
