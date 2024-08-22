import * as React from "react";

import { View, Image } from "react-native";
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
  const [image, setImage] = React.useState("");

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
      quality: 1,
    });
    console.log(result);
  };

  const launchCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      cameraType: ImagePicker.CameraType.back,
    });
    console.log(result);
    if (result.canceled === false) {
      setImage(result.assets[0].uri);
    }
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
        </View>
        <View>
          <View style={{ flexDirection: "row", gap: 8, marginVertical: 16 }}>
            <Icon source="eye" size={24} color="black" />
            <Text style={styles.subtitle}>Vista Previa</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: image }}
              style={{ height: 200, width: 200 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
