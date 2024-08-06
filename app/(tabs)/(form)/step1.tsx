import * as React from "react";

import { View } from "react-native";
import { customText } from "react-native-paper";
import { useAppTheme } from "../../_layout";

export const Text = customText<"customVariant">();

export default function Step1() {
  const {
    colors: { ...colors },
  } = useAppTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, color: colors.brandPrimary }}>
        Soy el paso 1
      </Text>
    </View>
  );
}
