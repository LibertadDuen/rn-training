import React from "react";
import { Portal, Modal, Text, Icon, Button } from "react-native-paper";
import { useAppTheme } from "@/app/_layout";
import { useGlobalStyles } from "@/styles/globalStyles";
import { View } from "react-native";

interface ModalProps {
  visible: boolean;
  onDismiss: () => void;
}

export default function SuccessModal({ visible, onDismiss }: ModalProps) {
  const styles = useGlobalStyles();
  const {
    colors: { ...colors },
  } = useAppTheme();

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={{
          backgroundColor: "#E8F4D7",
          padding: 16,
          width: "80%",
          alignSelf: "center",
          borderRadius: 12,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Icon source="check" size={20} color="#153D15" />
          <Text style={{ color: "#153D15", marginLeft: 8 }}>
            ¡Tu envío ha sido programado!
          </Text>
        </View>
      </Modal>
    </Portal>
  );
}
