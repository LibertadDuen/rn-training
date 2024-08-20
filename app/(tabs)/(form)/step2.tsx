import axios from "axios";
import * as React from "react";
import { View } from "react-native";
import { useGlobalStyles } from "@/styles/globalStyles";
import { Text, RadioButton, Divider, Icon } from "react-native-paper";

interface Client {
  _id: string;
  name: string;
  company: string;
  companyName?: string;
  address: string;
  postalCode: number;
  city: string;
  state: string;
  email: string;
  phone: string;
}
interface StepTwoFormProps {
  client?: Client;
  setClient: (client: Client) => void;
  error: string | undefined;
}

export default function StepTwoForm({
  client,
  setClient,
  error,
}: StepTwoFormProps) {
  const styles = useGlobalStyles();
  const [value, setValue] = React.useState({
    _id: "",
    name: "",
    company: "",
    companyName: "",
    address: "",
    postalCode: 0,
    city: "",
    state: "",
    email: "",
    phone: "",
  } as Client);
  const [clients, setClients] = React.useState([
    {
      label: "",
      value: "",
      info: {} as Client,
    },
  ]);
  const maxClients = 6;

  const getClients = async () => {
    await axios
      .get("http://localhost:3000/clients")
      .then((response) => {
        const clients = response.data.map((client: Client) => ({
          label: client.name,
          value: client._id,
          info: { ...client, companyName: client.company },
        }));
        setClients(clients);
      })
      .catch((error) => {
        console.error("Error fetching sites:", error);
      });
  };

  const handleSelect = (e: any) => {
    setValue(e);
    const clientToUpdate = clients.find((client) => client.value === e);

    if (clientToUpdate) {
      const clientInfo = clientToUpdate.info as Client;
      setClient(clientInfo);
    }
  };

  React.useEffect(() => {
    getClients();
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
        <RadioButton.Group
          onValueChange={handleSelect}
          value={client ? client._id : value._id}
        >
          {clients.slice(0, maxClients).map((client) => (
            <View key={client.info._id} style={styles.radioButton}>
              <RadioButton value={client.info._id} />
              <Text style={styles.radioButtonLabel}>
                {client.info.name}, {client.info.company}
              </Text>
            </View>
          ))}
        </RadioButton.Group>
        {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}
      </View>
    </View>
  );
}
