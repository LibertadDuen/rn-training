import React, { useState } from "react";

import { View } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";
import { Text, Divider, Icon } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";

export default function StepOneForm() {
  const [headquarters, setHQ] = useState<string>();
  const [value, setValue] = React.useState("first");
  const styles = useGlobalStyles();

  const dropDownItems = [
    { label: "Norte", value: "option1" },
    { label: "Centro Sur", value: "option2" },
    { label: "Av. Niños Héroes", value: "option3" },
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
          label="Sede de origen"
          placeholder="Selecciona una sede"
          options={dropDownItems}
          value={headquarters}
          onSelect={setHQ}
        />
      </View>
    </View>
  );
}
