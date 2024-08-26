import React from "react";
import { Portal, Modal, Text, Icon, Button } from "react-native-paper";
import { useAppTheme } from "@/app/_layout";
import { useGlobalStyles } from "@/styles/globalStyles";
import { View } from "react-native";

interface ModalProps {
  visible: boolean;
}

export default function SuccessModal({ visible }: ModalProps) {
  const styles = useGlobalStyles();
  const {
    colors: { ...colors },
  } = useAppTheme();

  return (
    <Portal>
      <Modal
        visible={true}
        onDismiss={() => {}}
        contentContainerStyle={{
          backgroundColor: colors.backgroundColor,
          padding: 16,
          width: "80%",
          alignSelf: "center",
          borderRadius: 12,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon source="check" size={20} color="green" />
          <Text>¡Tu envío ha sido programado!</Text>
        </View>

        <Button mode="contained" onPress={() => {}}>
          Ok
        </Button>
      </Modal>
    </Portal>
  );
}
