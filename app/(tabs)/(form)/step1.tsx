import React, { useEffect, useState } from "react";
import axios from "axios";
import { View } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";
import { useGlobalStyles } from "@/styles/globalStyles";
import { Text, Divider, Icon } from "react-native-paper";

interface StepOneFormProps {
  setShippingSite: (site: any) => void;
  error: string | undefined;
}

interface Site {
  _id: string;
  siteName: string;
  city: string;
  state: string;
}

export default function StepOneForm({
  setShippingSite,
  error,
}: StepOneFormProps) {
  const styles = useGlobalStyles();
  const [sites, setSites] = useState<Site[]>([]);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);

  const loadSites = async () => {
    try {
      const { data } = await axios.get(
        "https://oxbi-api-qa.onrender.com/sites"
      );
      setSites(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (e: any) => {
    setShippingSite(e);
    setSelectedSite(e);
  };

  useEffect(() => {
    loadSites();
  }, []);

  const dropDownItems = sites.map((site) => ({
    label: `${site.siteName}, ${site.city}, ${site.state}`,
    value: site._id.toString(),
  }));

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
          onSelect={handleSelect}
          value={selectedSite ?? undefined}
        />
        {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}
      </View>
    </View>
  );
}
