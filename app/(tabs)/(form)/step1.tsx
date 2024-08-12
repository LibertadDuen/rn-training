import React, { useState } from "react";

import { View } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";
import { Text, Divider, Icon, Button, Chip } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";

interface StepOneFormProps {
  headquarters: string | undefined;
  setHQ: (value?: string | undefined) => void;
  error: string | undefined;
}

export default function StepOneForm({
  headquarters,
  setHQ,
  error,
}: StepOneFormProps) {
  const styles = useGlobalStyles();

  const dropDownItems = [
    { label: "Norte", value: "option1" },
    { label: "Centro Sur", value: "option2" },
    { label: "Av. Niños Héroes", value: "option3" },
    { label: "Roma Norte", value: "option4" },
  ];

  return (
    <View style={styles.screenContainer}>
      <View>
        <Text style={styles.title}>Programa un nuevo envío</Text>
        <Divider style={styles.divider} />
      </View>
      <View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Icon source="office-building" size={24} color="black" />
          <Text style={styles.subtitle}>Origen</Text>
        </View>
        <Text style={styles.text}>
          Selecciona una de tus sedes previamente registradas.
        </Text>
      </View>
      <View>
        <Dropdown
          hideMenuHeader={false}
          label="Sede de origen"
          placeholder="Selecciona una sede"
          options={dropDownItems}
          value={headquarters}
          onSelect={setHQ}
        />
        {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}
      </View>
    </View>
  );
}
