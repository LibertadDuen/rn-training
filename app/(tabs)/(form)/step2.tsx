import * as React from "react";

import { View, StyleSheet } from "react-native";
import { Text, RadioButton, Divider } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";

export default function Step2() {
  const styles = useGlobalStyles();
  const [value, setValue] = React.useState("first");

  return (
    <View style={styles.screenContainer}>
      <View>
        <View>
          <Text style={styles.title}>Programa un nuevo envío</Text>
          <Divider style={styles.divider} />
        </View>
        <View>
          <Text style={styles.subtitle}>Destino</Text>
          <Text style={styles.text}>
            Selecciona uno de tus clientes previamente registrados.
          </Text>
        </View>
      </View>
      <View>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View>
            <Text>First</Text>
            <RadioButton value="first" />
          </View>
          <View>
            <Text>Second</Text>
            <RadioButton value="second" />
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
}
