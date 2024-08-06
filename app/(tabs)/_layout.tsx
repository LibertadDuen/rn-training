import React from "react";

import { CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import { Icon } from "react-native-paper";
import index from "./index";
import form from "./form";
import camera from "./camera";
import { useAppTheme } from "../_layout";

const Tab = createBottomTabNavigator();

export default function MyApp() {
  const {
    colors: { ...colors },
  } = useAppTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const label = route.name;
            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={index}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon source="alien" color={colors.brandPrimary} size={20} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Camera"
        component={camera}
        options={{
          tabBarLabel: "camera",
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon source="camera" color={colors.brandPrimary} size={20} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Form"
        component={form}
        options={{
          tabBarLabel: "barcode",
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon source="barcode" color={colors.brandPrimary} size={20} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
