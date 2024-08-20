import axios from "axios";
import * as React from "react";
import { View } from "react-native";
import { useGlobalStyles } from "@/styles/globalStyles";
import { Text, RadioButton, Divider, Icon } from "react-native-paper";

interface StepTwoFormProps {
  setClient: (client: any) => void;
  error: string | undefined;
}

interface Client {
  _id: string;
  name: string;
  company?: string;
}

export default function StepTwoForm({ setClient, error }: StepTwoFormProps) {
  const styles = useGlobalStyles();
  const [value, setValue] = React.useState<string | null>(null);
  const [clients, setClients] = React.useState<Client[]>([]);
  const maxClients = 6;

  const loadClients = async () => {
    try {
      const { data } = await axios.get(
        "https://oxbi-api-qa.onrender.com/clients"
      );
      setClients(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (e: string) => {
    setValue(e);
    const selectedClient = clients.find((client) => client._id === e);
    if (selectedClient) {
      setClient(selectedClient);
    }
  };

  React.useEffect(() => {
    loadClients();
  }, []);

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
        <RadioButton.Group onValueChange={handleSelect} value={value ?? ""}>
          {clients.slice(0, maxClients).map((client) => (
            <View key={client._id} style={styles.radioButton}>
              <RadioButton value={client._id} />
              <Text style={styles.radioButtonLabel}>
                {client.name}, {client.company}
              </Text>
            </View>
          ))}
        </RadioButton.Group>
        {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}
      </View>
    </View>
  );
}
