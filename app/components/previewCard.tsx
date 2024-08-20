import * as React from "react";

import { View } from "react-native";
import { Text } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";
import { useAppTheme } from "@/app/_layout";

interface PreviewCardProps {
  title: string;
  value: string;
  quantity?: number;
}

export default function PreviewCard(props: PreviewCardProps) {
  const styles = useGlobalStyles();
  const {
    colors: { ...colors },
  } = useAppTheme();

  return (
    <View
      style={{
        marginBottom: 8,
        borderRadius: 10,
        backgroundColor: colors.brandQuarterlyDark,
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      <Text style={styles.subtitle}>{props.title}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.text}>{props.value}</Text>
        {props.quantity && (
          <Text style={styles.text}>Cantidad: {props.quantity}</Text>
        )}
      </View>
    </View>
  );
}
