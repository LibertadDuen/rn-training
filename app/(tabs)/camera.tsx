import React, { useState } from "react";

import { View, Image } from "react-native";
import { customText, Icon, Button, Divider } from "react-native-paper";
import { useAppTheme } from "../_layout";
import { useGlobalStyles } from "@/styles/globalStyles";
import * as ImagePicker from "expo-image-picker";

export const Text = customText<"customVariant">();

export default function CameraScreen() {
  const styles = useGlobalStyles();
  const [image, setImage] = useState<string | null>(null);
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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (hasPermission === false) {
    return <Text>No tienes permisos para acceder a la galería</Text>;
  }

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
          {image && (
            <Divider
              style={{
                marginVertical: 2,
                borderWidth: 0.5,
                borderColor: colors.brandQuarterlyDark2,
              }}
            />
          )}
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: 250 }}
              />
            )}
            {image && (
              <Button
                mode="contained"
                style={[styles.primaryButton, { marginTop: 16 }]}
                labelStyle={styles.primaryButtonLabel}
              >
                Continuar
              </Button>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
