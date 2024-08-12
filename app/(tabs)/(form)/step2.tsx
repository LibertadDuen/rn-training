import * as React from "react";
import { View } from "react-native";
import { Text, RadioButton, Divider, Icon } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";

interface StepTwoFormProps {
  stepTwoData: string | undefined;
  setStepTwoData: (value?: string | undefined) => void;
  error: string | undefined;
}

export default function StepTwoForm({
  stepTwoData,
  setStepTwoData,
  error,
}: StepTwoFormProps) {
  const styles = useGlobalStyles();
  const [value, setValue] = React.useState(stepTwoData || "0");

  React.useEffect(() => {
    setStepTwoData(value);
  }, [value]);

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
            <RadioButton value="option1" />
            <Text style={styles.radioButtonLabel}>Herman Melville</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="option2" />
            <Text style={styles.radioButtonLabel}>Hermann Hesse</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="option3" />
            <Text style={styles.radioButtonLabel}>Jorge Luis Borges</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="option4" />
            <Text style={styles.radioButtonLabel}>
              Howard Phillips Lovecraft
            </Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="option5" />
            <Text style={styles.radioButtonLabel}>Bram Stoker</Text>
          </View>
        </RadioButton.Group>
        {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}
      </View>
    </View>
  );
}
