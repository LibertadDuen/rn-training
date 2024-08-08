import * as React from "react";

import { View } from "react-native";
import { Text, RadioButton, Divider, Icon } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";

export default function StepTwoForm() {
  const styles = useGlobalStyles();
  const [value, setValue] = React.useState("0");

  return (
    <View style={styles.screenContainer}>
      <View>
        <View>
          <Text style={styles.title}>Programa un nuevo envío</Text>
          <Divider style={styles.divider} />
        </View>
        <View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Icon source="account" size={24} color="black" />
            <Text style={styles.subtitle}>Destino</Text>
          </View>
          <Text style={styles.text}>
            Selecciona uno de tus clientes previamente registrados.
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 12 }}>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View style={styles.radioButton}>
            <RadioButton value="1" />
            <Text style={styles.radioButtonLabel}>Juan Pérez</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="2" />
            <Text style={styles.radioButtonLabel}>Roberto Martínez</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="3" />
            <Text style={styles.radioButtonLabel}>Alfredo Sánchez</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="4" />
            <Text style={styles.radioButtonLabel}>Raúl Vega</Text>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
}
