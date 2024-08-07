import React, { useState } from "react";

import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";
import { Text, Button, Divider } from "react-native-paper";

export default function StepOneForm() {
  const [headquarters, setHQ] = useState<string>();
  const [value, setValue] = React.useState("first");

  const dropDownItems = [
    { label: "Norte", value: "option1" },
    { label: "Centro Sur", value: "option2" },
    { label: "Av. Niños Héroes", value: "option3" },
  ];

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>Programa un nuevo envío</Text>
          <Divider style={styles.divider} />
        </View>
        <View>
          <Text style={styles.subtitle}>Origen</Text>
          <Text style={styles.text}>
            Selecciona una de tus sedes previamente registradas.
          </Text>
        </View>
        <View>
          <Dropdown
            label="Sede de origen"
            placeholder="Selecciona una sede"
            options={dropDownItems}
            value={headquarters}
            onSelect={setHQ}
          />
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.primaryButton}
          labelStyle={styles.primaryButtonLabel}
        >
          Continuar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  firstContainer: {
    gap: 12,
    backgroundColor: "#fff",
  },
  secondContainer: {
    gap: 12,
    backgroundColor: "#fff",
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "brandQuarterlyDark2",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
  },
  divider: {
    borderColor: "brandQuarterlyDark2",
    borderWidth: 0.5,
    marginTop: 8,
  },
  primaryButton: {
    display: "flex",
    backgroundColor: "brandTertiary",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  primaryButtonLabel: {
    fontSize: 18,
    color: "#ffffff",
  },
  dropDown: {
    borderRadius: 10,
  },
});
