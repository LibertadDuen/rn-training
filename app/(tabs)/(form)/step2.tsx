import * as React from "react";
import { View } from "react-native";
import { Text, RadioButton, Divider, Icon } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";

interface StepTwoFormProps {
  setClient: (client: any) => void;
  error: string | undefined;
}

export default function StepTwoForm({ setClient, error }: StepTwoFormProps) {
  const styles = useGlobalStyles();
  const [value, setValue] = React.useState("0");

  const handleSelect = (e: any) => {
    setValue(e);
    setClient(e);
  };

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
        <RadioButton.Group onValueChange={handleSelect} value={value}>
          <View style={styles.radioButton}>
            <RadioButton value="Juan Pérez" />
            <Text style={styles.radioButtonLabel}>Juan Pérez</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="Roberto Martínez" />
            <Text style={styles.radioButtonLabel}>Roberto Martínez</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="Alfredo Sánchez" />
            <Text style={styles.radioButtonLabel}>Alfredo Sánchez</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="Raúl Vega" />
            <Text style={styles.radioButtonLabel}>Raúl Vega</Text>
          </View>
        </RadioButton.Group>
        {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}
      </View>
    </View>
  );
}
