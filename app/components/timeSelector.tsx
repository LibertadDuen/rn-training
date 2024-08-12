import * as React from "react";

import { View, Platform } from "react-native";
import { Text, IconButton, TextInput } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { useAppTheme } from "@/app/_layout";

interface DateTimeSelectorProps {
  title: string;
}

export default function TimeSelector(props: DateTimeSelectorProps) {
  const styles = useGlobalStyles();
  const {
    colors: { ...colors },
  } = useAppTheme();

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={styles.subtitle}>{props.title}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          mode="outlined"
          outlineColor={colors.brandSecondaryDark2}
          outlineStyle={{ borderRadius: 10 }}
          style={{ backgroundColor: "#f2f2f2", width: "45%" }}
          placeholder="07:00"
        />
        <Text> a </Text>
        <TextInput
          mode="outlined"
          outlineColor={colors.brandSecondaryDark2}
          outlineStyle={{ borderRadius: 10 }}
          style={{ backgroundColor: "#f2f2f2", width: "45%" }}
          placeholder="10:00"
        />
      </View>
    </View>
  );
}
