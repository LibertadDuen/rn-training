import * as React from "react";

import { View } from "react-native";
import { Text, Divider, Icon } from "react-native-paper";
import DateTimeSelector from "@/app/components/dateTimeSelector";
import { useGlobalStyles } from "@/styles/globalStyles";

import { useAppTheme } from "@/app/_layout";

export default function Step3() {
  const styles = useGlobalStyles();
  const {
    colors: { ...colors },
  } = useAppTheme();

  return (
    <View style={styles.screenContainer}>
      <View>
        <View>
          <Text style={styles.title}>Programa un nuevo envío</Text>
          <Divider style={styles.divider} />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Icon source="calendar-heart" size={24} />
            <Text style={styles.subtitle}>Fecha</Text>
          </View>
          <Text style={styles.text}>
            Selecciona la fecha y hora de recolección y entrega.
          </Text>
        </View>
        <View>
          <DateTimeSelector title="Fecha de recolección" mode="date" />
          <DateTimeSelector title="Hora de recolección" mode="time" />
          <DateTimeSelector title="Fecha de entrega" mode="date" />
          <DateTimeSelector title="Hora de entrega" mode="time" />
        </View>
      </View>
    </View>
  );
}
