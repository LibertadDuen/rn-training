import * as React from "react";

import { View } from "react-native";
import { customText, Divider, Icon, Button } from "react-native-paper";
import { useAppTheme } from "../_layout";
import { useGlobalStyles } from "@/styles/globalStyles";
import * as ImagePicker from "expo-image-picker";

export const Text = customText<"customVariant">();

export default function Form() {
  const styles = useGlobalStyles();
  const {
    colors: { ...colors },
  } = useAppTheme();

  const [hasPermission, setHasPermission] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(galleryStatus.status === "granted");
    })(),
      [];
  });

  const launchGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
  };

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 16,
      }}
    >
      <View style={styles.screenContainer}>
        <View>
          <Text style={styles.title}>Sube tus evidencias</Text>
          <Divider style={styles.divider} />
        </View>
        <View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Icon source="camera" size={24} color="black" />
            <Text style={styles.subtitle}>Evidencia</Text>
          </View>
          <Text style={styles.text}>
            Toma una fotografía de tu embarque o selecciona una imagen de tu
            galería de fotos para archivarlo como evidencia.
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <Button mode="outlined" style={styles.secondaryButton}>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Icon
                source="camera-outline"
                size={24}
                color={colors.brandPrimary}
              />
              <Text style={styles.secondaryButtonLabel}>Tomar foto</Text>
            </View>
          </Button>
          <Button
            onPress={launchGallery}
            mode="outlined"
            style={styles.secondaryButton}
          >
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Icon
                source="image-multiple-outline"
                size={24}
                color={colors.brandPrimary}
              />
              <Text style={styles.secondaryButtonLabel}>
                Seleccionar imagen
              </Text>
            </View>
          </Button>
        </View>
      </View>
    </View>
  );
}
