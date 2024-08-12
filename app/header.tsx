import * as React from "react";
import { Appbar } from "react-native-paper";
import { Image, View } from "react-native";
import { useGlobalStyles } from "@/styles/globalStyles";
import { Text, Divider, Icon } from "react-native-paper";
import { AppTheme, useAppTheme } from "@/app/_layout";

const Header = () => {
  const styles = useGlobalStyles();
  const theme: AppTheme = useAppTheme();

  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.brandTertiary,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <Image
        source={require("@/assets/images/oxbi-logo.png")}
        style={{ width: 56.667, height: 34 }}
      />

      <View style={{ flexDirection: "row", gap: 8 }}>
        <Icon source="account-circle" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 16, fontFamily: "Work-Sans" }}>
          Mario
        </Text>
      </View>
    </Appbar.Header>
  );
};

export default Header;
