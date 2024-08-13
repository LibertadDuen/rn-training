import * as React from "react";

import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";
import { useAppTheme } from "@/app/_layout";

interface TimeSelectorProps {
  title: string;
  setTime: (time: any) => void;
}

export default function TimeSelector(props: TimeSelectorProps) {
  const styles = useGlobalStyles();
  const {
    colors: { ...colors },
  } = useAppTheme();

  const [start, setStart] = React.useState();
  const [end, setEnd] = React.useState();

  const handleStartTime = (e: any) => {
    setStart(e);
    props.setTime(start);
  };

  const handleEndTime = (e: any) => {
    setEnd(e);
    props.setTime(start + " a " + end + "0");
  };

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
          onChangeText={handleStartTime}
          value={start}
        />
        <Text> a </Text>
        <TextInput
          mode="outlined"
          outlineColor={colors.brandSecondaryDark2}
          outlineStyle={{ borderRadius: 10 }}
          style={{ backgroundColor: "#f2f2f2", width: "45%" }}
          placeholder="10:00"
          onChangeText={handleEndTime}
          value={end}
        />
      </View>
    </View>
  );
}
