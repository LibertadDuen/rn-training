import * as React from "react";

import { View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { useAppTheme } from "../_layout";
import { useGlobalStyles } from "@/styles/globalStyles";

export default function Index() {
  const styles = useGlobalStyles();

  const {
    colors: { ...colors },
  } = useAppTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 16,
        gap: 32,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: colors.brandQuarterlyDark2,
          fontFamily: "Work-Sans",
        }}
      >
        Bienvenido a OX BI
      </Text>
      <Avatar.Icon size={100} icon="account" />
      <Text
        style={{
          fontSize: 24,
          color: colors.brandPrimary,
          fontFamily: "Roboto-Medium",
        }}
      >
        ¡Hola, Mario!
      </Text>
    </View>
  );
}
