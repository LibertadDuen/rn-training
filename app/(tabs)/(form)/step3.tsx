import * as React from "react";

import { View } from "react-native";
import { Text, Divider, Icon } from "react-native-paper";
import DateSelector from "@/app/components/dateSelector";
import TimeSelector from "@/app/components/timeSelector";
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
          <DateSelector title="Fecha de recolección" />
          <TimeSelector title="Hora de recolección" />
          <DateSelector title="Fecha de entrega" />
          <TimeSelector title="Hora de recolección" />
        </View>
      </View>
    </View>
  );
}
