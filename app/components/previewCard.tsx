import * as React from "react";

import { View } from "react-native";
import { Text } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";
import { useAppTheme } from "@/app/_layout";

interface PreviewCardProps {
  title: string;
  value?: string;
  time?: { start: string; end: string };
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
      {props.time ? (
        <Text style={styles.text}>
          {props.time.start} a {props.time.end}
        </Text>
      ) : (
        <Text style={styles.text}>{props.value}</Text>
      )}
    </View>
  );
}
