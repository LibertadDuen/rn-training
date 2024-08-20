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
  setTime: (date: any) => void;
}

export default function TimeSelector(props: DateTimeSelectorProps) {
  const styles = useGlobalStyles();
  const {
    colors: { ...colors },
  } = useAppTheme();

  const [selectTime, setTime] = React.useState(new Date());

  const onChange = (e: any, time: any) => {
    setTime(time);
    props.setTime(
      time.toLocaleTimeString("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
  };

  const openAndroidCalendar = () => {
    DateTimePickerAndroid.open({
      mode: "time",
      is24Hour: true,
      value: selectTime,
      onChange,
    });
  };

  return (
    <View
      style={{
        borderColor: colors.brandSecondaryDark2,
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.subtitle}>{props.title}</Text>
        {Platform.OS === "android" ? (
          <IconButton
            icon="clock-outline"
            onPress={() => openAndroidCalendar()}
          />
        ) : (
          <DateTimePicker
            value={selectTime}
            is24Hour={true}
            mode="time"
            onChange={(e: any, time: any) => onChange(e, time)}
          />
        )}
      </View>
      <Text style={styles.text}>
        {selectTime.toLocaleTimeString("es-MX", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </Text>
    </View>
  );
}
