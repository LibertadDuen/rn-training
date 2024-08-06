import * as React from "react";
import { customText } from "react-native-paper";
import { useAppTheme } from "../_layout";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import step1 from "./(form)/step1";
import step2 from "./(form)/step2";

export const Text = customText<"customVariant">();

export default function Form() {
  const {
    colors: { ...colors },
  } = useAppTheme();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="step2">
        <Stack.Screen
          name="Paso2"
          component={step2}
          options={{ title: "Step2" }}
        />
        <Stack.Screen
          name="Paso1"
          component={step1}
          options={{ title: "Step1" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
