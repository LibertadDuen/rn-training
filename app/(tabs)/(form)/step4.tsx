import * as React from "react";

import { View } from "react-native";
import { Text, Divider, Icon } from "react-native-paper";
import { useGlobalStyles } from "@/styles/globalStyles";
import PreviewCard from "@/app/components/previewCard";

interface ShipmentProps {
  dateSent: any;
  dateDelivery: any;
  timeSent?: { start: any; end: any };
  timeDelivery?: { start: any; end: any };
  shippingSite: any;
  client: any;
}

export default function StepFourForm(props: ShipmentProps) {
  const styles = useGlobalStyles();

  return (
    <View style={styles.screenContainer}>
      <View>
        <View>
          <Text style={styles.title}>Programa un nuevo envío</Text>
          <Divider style={styles.divider} />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Icon source="pencil-circle" size={24} />
            <Text style={styles.subtitle}>Confirma</Text>
          </View>
          <Text style={styles.text}>
            Revisa la información del envío, y regístrarlo de ser correcta.{" "}
          </Text>
        </View>
        <View>
          <PreviewCard title="Origen" value={props.shippingSite} />
          <PreviewCard title="Cliente" value={props.client} />
          <PreviewCard title="Fecha de recolección" value={props.dateSent} />
          {/* <PreviewCard
            title="Hora de recolección"
            time={{ start: props.timeSent.start, end: props.timeSent.end }}
          />
          <PreviewCard title="Fecha de entrega" value={props.dateDelivery} />
          <PreviewCard
            title="Hora de entrega"
            time={{
              start: props.timeDelivery.start,
              end: props.timeDelivery.end,
            }}
          /> */}
        </View>
      </View>
    </View>
  );
}
