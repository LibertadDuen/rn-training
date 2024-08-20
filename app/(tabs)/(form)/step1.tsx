import React, { useState } from "react";

import { View } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";
import { Text, Divider, Icon, Button, Chip } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";
interface ShippingSite {
  contactName: string;
  companyName: string;
  siteName: string;
  address: string;
  postalCode: number;
  city: string;
  state: string;
}
interface StepOneFormProps {
  setShippingSite: (site: ShippingSite) => void;
  error: string | undefined;
}

export default function StepOneForm({
  setShippingSite,
  error,
}: StepOneFormProps) {
  const [headquarters, setHQ] = useState<string>();
  const styles = useGlobalStyles();

  const dropDownItems = [
    { label: "Norte", value: "Norte" },
    { label: "Centro Sur", value: "Centro Sur" },
    { label: "Av. Niños Héroes", value: "Av. Niños Héroes" },
  ];

  const handleSelect = (e: any) => {
    setHQ(e);
    const site = {
      contactName: "Erick Silva",
      companyName: e,
      siteName: "Chihuahua norte",
      address: "Kansas 2000",
      postalCode: 33000,
      city: "Chihuahua",
      state: "Chihuahua",
    } as ShippingSite;
    setShippingSite(site);
  };

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
          onSelect={handleSelect}
        />
        {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}
      </View>
    </View>
  );
}
