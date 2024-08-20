import * as React from "react";

import { View } from "react-native";
import { Text, Divider, Icon } from "react-native-paper";
import DateSelector from "@/app/components/dateSelector";
import TimeSelector2 from "@/app/components/timeSelector2";
import { useGlobalStyles } from "@/styles/globalStyles";

interface StepThreeFormProps {
  setDateSent: (date: any) => void;
  setDateDelivery: (date: any) => void;
  setTimeSent: (time: any) => void;
  setTimeDelivery: (time: any) => void;
}

export default function StepFourForm({
  setDateSent,
  setDateDelivery,
  setTimeSent,
  setTimeDelivery,
}: StepThreeFormProps) {
  const styles = useGlobalStyles();

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
          <DateSelector title="Fecha de recolección" setDate={setDateSent} />
          <TimeSelector2 title="Hora de recolección" setTime={setTimeSent} />
          <DateSelector title="Fecha de entrega" setDate={setDateDelivery} />
          <TimeSelector2 title="Hora de entrega" setTime={setTimeDelivery} />
        </View>
      </View>
    </View>
  );
}
