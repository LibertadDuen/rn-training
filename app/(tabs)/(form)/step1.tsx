import React, { useEffect, useState } from "react";
import axios from "axios";
import { View } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";
import { useGlobalStyles } from "@/styles/globalStyles";
import { Text, Divider, Icon } from "react-native-paper";

interface ShippingSite {
  _id: string;
  contactName: string;
  companyName: string;
  siteName: string;
  address: string;
  postalCode: number;
  city: string;
  state: string;
}
interface StepOneFormProps {
  shippingSite?: ShippingSite;
  setShippingSite: (site: ShippingSite) => void;
  error: string | undefined;
}

export default function StepOneForm({
  shippingSite,
  setShippingSite,
  error,
}: StepOneFormProps) {
  const styles = useGlobalStyles();
  const [sites, setSites] = useState([
    {
      label: "",
      value: "",
      info: {} as ShippingSite,
    },
  ]);
  const [selectedSite, setSelectedSite] = useState();

  const getSites = () => {
    axios
      .get("http://localhost:3000/sites")
      .then((response) => {
        const sites = response.data.map((site: ShippingSite) => ({
          label: site.siteName,
          value: site._id,
          info: site,
        }));
        setSites(sites);
      })
      .catch((error) => {
        console.error("Error fetching sites:", error);
      });
  };

  const handleSelect = (e: any) => {
    setSelectedSite(e);
    const siteToUpdate = sites.find((site) => site.value === e);
    if (siteToUpdate) {
      const siteInfo = siteToUpdate.info as ShippingSite;
      setShippingSite({
        _id: siteInfo._id,
        contactName: siteInfo.contactName,
        companyName: siteInfo.companyName,
        siteName: siteInfo.siteName,
        address: siteInfo.address,
        postalCode: siteInfo.postalCode,
        city: siteInfo.city,
        state: siteInfo.state,
      });
    }
  };

  useEffect(() => {
    getSites();
  }, []);

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
          options={sites}
          value={shippingSite ? shippingSite._id : selectedSite}
          onSelect={handleSelect}
        />
        {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}
      </View>
    </View>
  );
}
