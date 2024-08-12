import * as React from "react";

import { View, Platform } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { useAppTheme } from "@/app/_layout";

interface DateTimeSelectorProps {
  title: string;
}

export default function DateSelector(props: DateTimeSelectorProps) {
  const styles = useGlobalStyles();
  const {
    colors: { ...colors },
  } = useAppTheme();

  const openAndroidCalendar = () => {
    DateTimePickerAndroid.open({
      mode: "date",
      value: new Date(),
      minimumDate: new Date(),
    });
  };

  return (
    <View
      style={{
        borderColor: colors.brandSecondaryDark2,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 8,
      }}
    >
      <Text style={styles.subtitle}>{props.title}</Text>
      {Platform.OS === "android" ? (
        <IconButton icon="calendar" onPress={() => openAndroidCalendar()} />
      ) : (
        <DateTimePicker
          value={new Date()}
          minimumDate={new Date()}
          mode="date"
        />
      )}
    </View>
  );
}
