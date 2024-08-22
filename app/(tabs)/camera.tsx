import React from "react";

import { View, Image } from "react-native";
import { customText, Icon, Button, Divider } from "react-native-paper";
import { useAppTheme } from "../_layout";
import { useGlobalStyles } from "@/styles/globalStyles";
import * as ImagePicker from "expo-image-picker";

export const Text = customText<"customVariant">();

export default function CameraScreen() {
  const styles = useGlobalStyles();
  const {
    colors: { ...colors },
  } = useAppTheme();

  const [hasGalleryPermission, setHasGalleryPermission] = React.useState(false);
  const [hasCameraPermission, setHasCameraPermission] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [file, setFile] = React.useState<File>();

  React.useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
      setHasCameraPermission(cameraStatus.status === "granted");
    })(),
      [];
  });

  const launchGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      // const file = new File([result.assets[0]], result.assets[0].uri);
      // setFile(file);
      setImage(result.assets[0].uri);
    }
  };

  const launchCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      cameraType: ImagePicker.CameraType.back,
    });
    if (result.canceled === false) {
      setImage(result.assets[0].uri);
    }
  };
  if (!hasGalleryPermission || !hasCameraPermission) {
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
          <Button
            onPress={launchCamera}
            mode="outlined"
            style={styles.secondaryButton}
          >
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
